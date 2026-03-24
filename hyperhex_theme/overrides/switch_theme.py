import frappe


@frappe.whitelist()
def switch_theme(theme: str = "light"):
    """
    Override the default switch_theme to support HyperHex themes.
    Supported themes: light, dark, automatic
    """
    theme = theme.lower() if theme else "dark"
    
    if theme not in ("light", "dark", "automatic"):
        theme = "light"

    user = frappe.session.user
    if user == "Guest":
        frappe.throw("Guest user cannot switch theme")

    return {"theme": theme}
