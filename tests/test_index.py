
import re
from playwright.sync_api import Page, expect


def test_page_title(page: Page):
    page.goto("http://localhost:3000")
    expect(page).to_have_title(re.compile("Allan Batac"))


def test_header_content(page: Page):
    page.goto("http://localhost:3000")
    header = page.locator("header")
    expect(header.locator("h1")).to_have_text("Allan ""AJ"" Batac")
    expect(header.locator("p")).to_have_text(
        "Tech Leader | Web Applications Developer | Futurist | Ideator | SWE"
    )


def test_jump_links(page: Page):
    page.goto("http://localhost:3000")
    jump_links = page.locator(".jump-links a")
    expect(jump_links).to_have_count(6)
    expected_links = {
        "Summary": "#summary",
        "Recent Apps": "#recent-apps",
        "Skills": "#skills",
        "Experience": "#experience",
        "Certifications": "#certifications",
        "Education": "#education",
    }
    for link_text, href in expected_links.items():
        link = jump_links.filter(has_text=link_text)
        expect(link).to_have_attribute("href", href)


def test_contact_info(page: Page):
    page.goto("http://localhost:3000")
    contact_info = page.locator(".contact-info a")
    expect(contact_info).to_have_count(4)


def test_section_headers(page: Page):
    page.goto("http://localhost:3000")
    sections = page.locator("section")
    expected_headers = [
        "📝 Summary",
        "🚀 Recent Web Applications Designed and Developed (AI-Powered)",
        "🛠️ Skills",
        "🏢 Experience",
        "📜 Certifications",
        "🎓 Education",
    ]
    for i, header_text in enumerate(expected_headers):
        expect(sections.nth(i).locator(".section-header h2")).to_have_text(header_text)


def test_skill_search(page: Page):
    page.goto("http://localhost:3000")
    skills_section = page.locator("#skills")
    search_input = skills_section.locator("#skill-search")
    search_input.type("React")
    visible_skills = skills_section.locator(".skill-tag[style='display: inline-block;']")
    expect(visible_skills).to_have_count(1)
    expect(visible_skills).to_have_text("React")
    reset_button = skills_section.locator("#reset-skills-btn")
    reset_button.click()
    all_skills = skills_section.locator(".skill-tag")
    expect(all_skills.first).to_be_visible()


def test_theme_switcher(page: Page):
    page.goto("http://localhost:3000")
    theme_switch = page.locator("#theme-checkbox")
    body = page.locator("body")
    theme_switch.check()
    expect(body).to_have_class("dark-theme")
    theme_switch.uncheck()
    expect(body).not_to_have_class("dark-theme")


def test_font_sizer_buttons(page: Page):
    page.goto("http://localhost:3000")
    body = page.locator("body")
    initial_font_size_str = body.evaluate("el => getComputedStyle(el).fontSize")
    initial_font_size = float(initial_font_size_str.replace("px", ""))

    increase_button = page.locator("#font-increase")
    increase_button.click()
    increased_font_size_str = body.evaluate("el => getComputedStyle(el).fontSize")
    increased_font_size = float(increased_font_size_str.replace("px", ""))
    assert increased_font_size > initial_font_size

    decrease_button = page.locator("#font-decrease")
    decrease_button.click()
    decreased_font_size_str = body.evaluate("el => getComputedStyle(el).fontSize")
    decreased_font_size = float(decreased_font_size_str.replace("px", ""))
    assert decreased_font_size == initial_font_size

    reset_button = page.locator("#font-reset")
    reset_button.click()
    reset_font_size_str = body.evaluate("el => getComputedStyle(el).fontSize")
    reset_font_size = float(reset_font_size_str.replace("px", ""))
    assert reset_font_size != increased_font_size


def test_back_to_top_button(page: Page):
    page.goto("http://localhost:3000")
    back_to_top_button = page.locator("#back-to-top-btn")
    expect(back_to_top_button).not_to_be_visible()
    page.evaluate("window.scrollTo(0, 500)")
    expect(back_to_top_button).to_be_visible()
    back_to_top_button.click()
    page.wait_for_function("() => window.scrollY === 0")
    expect(back_to_top_button).not_to_be_visible()


def test_section_content_visibility(page: Page):
    page.goto("http://localhost:3000")
    summary_header = page.locator("#summary .section-header")
    summary_content = page.locator("#summary-content")
    expect(summary_content).to_be_visible()
    summary_header.click()
    expect(summary_content).not_to_be_visible()
    summary_header.click()
    expect(summary_content).to_be_visible()

