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
        "WPEG Classifieds – Local marketplace": "https://classifieds.wpeg.ca",
        "Explore WPEG – AI Trip Planner": "https://explore.wpeg.ca",
        "Winnipeg Jobs": "https://jobs.wpeg.app",
        "WPEG Portal – Winnipeg Micro Apps Hub": "https://portal.wpeg.app",
        "Quilala – Canada’s Real-Time Community": "https://quilala.ca",
        "Erutrepa – Photo AI Explainer": "https://app.erutrepa.com",
        "Pixel IQ – AI-Powered Image Intelligence": "https://pixeliq.ca",
        "aHREFna – Domain Intelligence. Engineered.": "https://ahrefna.com",
        "FOSSY – Curated FOSS Directory": "https://fossy.dev",
        "Mekeni": "https://mekeni.ca/",
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


def test_layout_css_is_linked(page: Page):
    page.goto("http://localhost:3000")
    stylesheet = page.locator('link[rel="stylesheet"][href="css/style.css?v=10"]')
    expect(stylesheet).to_have_count(1)
