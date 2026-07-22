import re
from pathlib import Path

from playwright.sync_api import Page, expect


ROOT = Path(__file__).resolve().parents[1]


def test_page_title(page: Page):
    page.goto("http://localhost:3000")
    expect(page).to_have_title(re.compile("Allan Batac"))


def test_header_content(page: Page):
    page.goto("http://localhost:3000")
    header = page.locator("header")
    expect(header.locator("h1")).to_have_text("Allan Batac")
    expect(header.locator("p")).to_have_text(
        "Full-Stack Engineer · UI/UX & Tech Leader"
    )


def test_static_html_has_no_script_tags():
    index_html = (ROOT / "index.html").read_text(encoding="utf-8")
    changelog_html = (ROOT / "changelog.html").read_text(encoding="utf-8")

    assert "<script" not in index_html.lower()
    assert "<script" not in changelog_html.lower()
    assert "googletagmanager" not in index_html.lower()
    assert "js/script.js" not in index_html.lower()


def test_js_powered_controls_removed(page: Page):
    page.goto("http://localhost:3000")

    expect(page.locator("#theme-checkbox")).to_have_count(0)
    expect(page.locator("#font-increase")).to_have_count(0)
    expect(page.locator("#font-decrease")).to_have_count(0)
    expect(page.locator("#font-reset")).to_have_count(0)
    expect(page.locator("#back-to-top-btn")).to_have_count(0)


def test_jump_links(page: Page):
    page.goto("http://localhost:3000")
    expected_links = {
        "Summary": "#summary",
        "Business Summary": "#business-summary",
        "Skills": "#skills",
        "Experience": "#experience",
        "Certifications": "#certifications",
        "Education": "#education",
        "Recent Apps": "#recent-apps",
    }

    jump_links = page.locator(".jump-links a")
    expect(jump_links).to_have_count(len(expected_links))

    for link_text, href in expected_links.items():
        link = jump_links.filter(has_text=re.compile(f"^{re.escape(link_text)}$"))
        expect(link).to_have_count(1)
        expect(link).to_have_attribute("href", href)


def test_contact_info(page: Page):
    page.goto("http://localhost:3000")
    contact_info = page.locator(".contact-info a")
    expect(contact_info).to_have_count(5)
    expect(contact_info).to_contain_text(["Phone", "Email", "LinkedIn", "GitHub", "Website"])


def test_section_headers(page: Page):
    page.goto("http://localhost:3000")
    expected_headers = [
        "Summary",
        "Business Summary",
        "Skills",
        "Experience",
        "Education",
        "Recently built apps Ideation to Execution",
    ]

    section_headers = page.locator("section .section-header")
    expect(section_headers).to_have_count(len(expected_headers))
    expect(section_headers).to_contain_text(expected_headers)


def test_recent_apps_are_static_unique_and_linked(page: Page):
    page.goto("http://localhost:3000")
    expected_projects = {
        "WPEG Classifieds — Local marketplace": "https://classifieds.wpeg.ca",
        "Explore WPEG — AI Trip Planner": "https://explore.wpeg.ca",
        "Winnipeg Jobs": "https://jobs.wpeg.app",
        "WPEG Portal — Winnipeg Micro Apps Hub": "https://portal.wpeg.app",
        "Quilala — Canada’s Real-Time Community": "https://quilala.ca",
        "Erutrepa — Photo AI Explainer": "https://app.erutrepa.com",
        "Pixel IQ — AI-Powered Image Intelligence": "https://pixeliq.ca",
        "aHREFna — Domain Intelligence. Engineered.": "https://ahrefna.com",
        "FOSSY — Curated FOSS Directory": "https://fossy.dev",
        "Mekeni": "https://mekeni.ca/",
        "EmailSig": "https://www.emailsig.website/",
    }

    for project, url in expected_projects.items():
        card = page.locator(".app-card", has=page.locator("h3", has_text=re.compile(f"^{re.escape(project)}$")))
        expect(card).to_have_count(1)
        expect(card.locator("a")).to_have_attribute("href", url)

    for card in page.locator(".app-card").all():
        icon_background = card.locator("h3").evaluate(
            "element => getComputedStyle(element, '::before').backgroundImage"
        )
        assert icon_background != "none"

    email_iq = page.locator(".app-card", has=page.locator("h3", has_text="Email IQ"))
    expect(email_iq).to_have_count(1)
    expect(email_iq.locator(".tag")).to_have_text("Archived")
    expect(email_iq.locator("a")).to_have_count(0)
    expect(email_iq.locator(".app-availability")).to_have_text("URL unavailable")

    for project in ("Headless WP to React", "Canvas Crop"):
        open_source_card = page.locator(
            ".app-card", has=page.locator("h3", has_text=project)
        )
        expect(open_source_card).to_have_count(1)
        expect(open_source_card.locator(".tag")).to_have_text("Open Source")


def test_app_drawer_and_technology_stacks(page: Page):
    page.goto("http://localhost:3000")

    expected_stacks = {
        "WPEG Classifieds — Local marketplace": ["Next.js", "Firebase App Hosting"],
        "Explore WPEG — AI Trip Planner": ["Next.js", "Firebase App Hosting"],
        "Winnipeg Jobs": ["React", "Vite", "Supabase", "Cloudflare Edge"],
        "WPEG Portal — Winnipeg Micro Apps Hub": ["Next.js", "Firebase App Hosting"],
        "Quilala — Canada’s Real-Time Community": ["Next.js", "Cloudflare Edge"],
        "Erutrepa — Photo AI Explainer": ["Next.js", "Firebase App Hosting"],
        "Pixel IQ — AI-Powered Image Intelligence": ["Next.js", "Firebase App Hosting"],
        "aHREFna — Domain Intelligence. Engineered.": ["Next.js", "Netlify", "Cloudflare Edge"],
        "FOSSY — Curated FOSS Directory": ["React", "TanStack Router", "Vite", "Supabase", "Clerk", "Tailwind CSS", "Cloudflare Edge"],
        "Mekeni": ["Next.js", "Firebase App Hosting"],
        "DotsLife": ["React", "Vite", "Supabase", "Cloudflare Edge"],
        "RephrAIs": ["React", "Vite", "Supabase", "Cloudflare Edge"],
        "Joye": ["Next.js", "Firebase App Hosting"],
        "Heather Tardiff": ["WordPress", "jQuery"],
        "Marissa Naylor": ["WordPress", "jQuery"],
        "GreenRocket": ["React", "Vite", "Supabase", "Netlify"],
        "Beautiful Invoices": ["React", "Vite", "Netlify"],
        "LinkN": ["React", "Supabase", "Cloudflare Edge"],
        "Tales": ["Next.js", "Firebase App Hosting"],
        "Favicon.Love": ["React", "Vite", "Netlify"],
        "Launch_Wizard": ["React", "Vite", "Tailwind CSS", "Netlify"],
        "GlobalTrends": ["React", "Vite", "Netlify"],
        "Virtual Realty Staging": ["Technology unverified"],
        "Colour Palette Generator": ["React", "Vite", "Netlify", "Cloudflare Edge"],
        "kulay": ["Next.js", "Firebase App Hosting"],
        "Palayok": ["Next.js", "Firebase App Hosting", "Cloudflare Edge"],
        "Celebrity r8r": ["Next.js", "Firebase App Hosting", "Cloudflare Edge", "Redirects"],
        "EmailSig": ["Next.js", "Cloudflare Edge"],
        "Headless WP to React": ["React", "Vite", "WordPress.com API", "Netlify"],
        "SocialSpark": ["Next.js", "Firebase App Hosting"],
        "Report Hotel": ["Next.js", "Firebase App Hosting"],
        "Email IQ": ["Technology unverified"],
        "SpotBack": ["Next.js", "Firebase App Hosting"],
        "MetaData Parser": ["React", "Vite", "Netlify"],
        "Critter Poop": ["Next.js", "Netlify"],
        "Type Invaders": ["React", "Vite", "Supabase", "Cloudflare Edge"],
        "Sudokuh": ["Next.js", "Netlify"],
        "QRky": ["React", "Vite", "Netlify"],
        "Canvas Crop": ["Next.js", "Netlify"],
        "RetroSnap": ["Next.js", "Netlify", "Cloudflare Edge"],
    }

    cards = page.locator(".app-card")
    expect(cards).to_have_count(40)
    expect(page.locator("#recent-apps-content > .apps-grid > .app-card")).to_have_count(10)
    expect(page.locator(".app-drawer-grid > .app-card")).to_have_count(30)

    actual_stacks = cards.evaluate_all(
        """
        cards => Object.fromEntries(cards.map(card => {
          const title = Array.from(card.querySelector('h3').childNodes)
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .map(node => node.textContent)
            .join('')
            .trim();
          const stack = Array.from(card.querySelectorAll('.tech-stack span'))
            .map(item => item.textContent.trim());
          return [title, stack];
        }))
        """
    )
    assert actual_stacks == expected_stacks

    drawer = page.locator(".app-drawer")
    expect(drawer).not_to_have_attribute("open", "")
    expect(drawer.locator("summary > span")).to_have_text("Open the app drawer")
    expect(drawer.locator("summary > small")).to_have_text("30 more builds inside")
    drawer.locator("summary").click()
    expect(drawer).to_have_attribute("open", "")
    expect(drawer.locator(".app-card").first).to_be_visible()

    for project in ("Virtual Realty Staging", "Email IQ"):
        unavailable_card = page.locator(
            ".app-card", has=page.locator("h3", has_text=project)
        )
        expect(unavailable_card.locator("a")).to_have_count(0)
        expect(unavailable_card.locator(".app-availability")).to_have_text("URL unavailable")


def test_layout_css_is_linked(page: Page):
    page.goto("http://localhost:3000")
    stylesheet = page.locator('link[rel="stylesheet"][href="css/style.css?v=12"]')
    expect(stylesheet).to_have_count(1)


def test_display_typography_uses_instrument_serif(page: Page):
    page.goto("http://localhost:3000")

    font_stylesheet = page.locator(
        'link[rel="stylesheet"][href*="family=Instrument+Serif:ital@0;1"]'
    )
    expect(font_stylesheet).to_have_count(1)

    for selector in ("h1", "h2", "h3"):
        heading = page.locator(selector).first
        styles = heading.evaluate(
            "element => ({ family: getComputedStyle(element).fontFamily, style: getComputedStyle(element).fontStyle, weight: getComputedStyle(element).fontWeight })"
        )
        assert "Instrument Serif" in styles["family"]
        assert styles["style"] == "italic"
        assert styles["weight"] == "400"
