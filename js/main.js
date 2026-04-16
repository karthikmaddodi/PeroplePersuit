/* ============================================
   Liquid Intelligence – Main JavaScript
   ============================================ */

/**
 * Loads an HTML partial file and injects it into a target element.
 * @param {string} file     - Path to the partial, e.g. "header.html"
 * @param {string} selector - CSS selector of the mount point, e.g. "#header-mount"
 */
async function loadPartial(file, selector) {
    try {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Failed to load ${file}: ${res.status}`);
        const html = await res.text();
        document.querySelector(selector).innerHTML = html;
    } catch (err) {
        console.error(err);
    }
}

/**
 * Inject header and footer partials once the DOM is ready.
 * To reuse on any new page, just call loadPartial() with the right selector.
 */
document.addEventListener("DOMContentLoaded", () => {
    loadPartial("header.html", "#header-mount");
    loadPartial("footer.html", "#footer-mount");
});

/* ============================================================
   Tailwind CSS runtime configuration.
   All design tokens live here — no need to touch HTML or CSS.
============================================================ */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-background":               "#191c1e",
                "inverse-on-surface":          "#eff1f3",
                "secondary-container":         "#d5e3fc",
                "surface-container":           "#eceef0",
                "primary":                     "#002045",
                "outline-variant":             "#c4c6cf",
                "on-error":                    "#ffffff",
                "on-secondary":                "#ffffff",
                "on-tertiary-fixed-variant":   "#5516be",
                "on-primary":                  "#ffffff",
                "surface-bright":              "#f7f9fb",
                "background":                  "#f7f9fb",
                "surface-container-lowest":    "#ffffff",
                "surface-container-high":      "#e6e8ea",
                "surface-dim":                 "#d8dadc",
                "inverse-surface":             "#2d3133",
                "outline":                     "#74777f",
                "on-primary-container":        "#86a0cd",
                "surface-variant":             "#e0e3e5",
                "primary-container":           "#1a365d",
                "on-secondary-container":      "#57657a",
                "error":                       "#ba1a1a",
                "surface-container-low":       "#f2f4f6",
                "tertiary":                    "#290069",
                "surface-container-highest":   "#e0e3e5",
                "secondary-fixed":             "#d5e3fc",
                "primary-fixed-dim":           "#adc7f7",
                "inverse-primary":             "#adc7f7",
                "on-tertiary":                 "#ffffff",
                "primary-fixed":               "#d6e3ff",
                "tertiary-fixed":              "#e9ddff",
                "surface":                     "#f7f9fb",
                "on-surface-variant":          "#43474e",
                "on-secondary-fixed-variant":  "#3a485b",
                "tertiary-fixed-dim":          "#d0bcff",
                "secondary-fixed-dim":         "#b9c7df",
                "on-tertiary-fixed":           "#23005c",
                "on-tertiary-container":       "#ac8bff",
                "on-error-container":          "#93000a",
                "on-surface":                  "#191c1e",
                "on-secondary-fixed":          "#0d1c2e",
                "surface-tint":                "#455f88",
                "tertiary-container":          "#42009f",
                "secondary":                   "#515f74",
                "error-container":             "#ffdad6",
                "on-primary-fixed-variant":    "#2d476f",
                "on-primary-fixed":            "#001b3c"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg:      "0.5rem",
                xl:      "0.75rem",
                full:    "9999px"
            },
            fontFamily: {
                headline: ["Manrope"],
                body:     ["Inter"],
                label:    ["Inter"]
            }
        }
    }
};