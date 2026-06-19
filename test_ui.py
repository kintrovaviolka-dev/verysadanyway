import time
from playwright.sync_api import sync_playwright

def test_keyboard_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('http://localhost:8000')
        time.sleep(1) # wait for DOMContentLoaded

        # Test selecting grade 3 via keyboard
        print("Testing grade 3 selection...")
        grade_3_card = page.locator('.grade-card[data-grade="3"]')
        grade_3_card.focus()
        page.keyboard.press('Enter')
        time.sleep(0.5)

        # Check if subject section becomes active
        subject_section = page.locator('#subjects-section')
        is_active = subject_section.evaluate("el => el.classList.contains('active')")
        print(f"Subjects section active: {is_active}")

        # Test selecting 'patfyz' subject via keyboard
        print("Testing patfyz selection...")
        patfyz_card = page.locator('#subject-patfyz')
        patfyz_card.focus()
        page.keyboard.press(' ') # Test spacebar
        time.sleep(0.5)

        # Check if hub section becomes active
        hub_section = page.locator('#hub-section')
        is_hub_active = hub_section.evaluate("el => el.classList.contains('active')")
        print(f"Hub section active: {is_hub_active}")

        hub_title = page.locator('#hub-title').inner_text()
        print(f"Hub title: {hub_title}")

        browser.close()

if __name__ == "__main__":
    test_keyboard_navigation()
