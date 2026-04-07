```markdown
# Design System Strategy: The Heirloom Editorial

## 1. Overview & Creative North Star

**Creative North Star: The Modern Keraton**
This design system rejects the "digital template" aesthetic in favor of a high-end editorial experience that feels like a physical, handcrafted royal invitation. We are not building a website; we are curating a digital heirloom. 

The system breaks away from rigid, boxy layouts by embracing **Asymmetric Balance** and **Negative Space**. By layering traditional Javanese motifs (Gunungan and Batik) over a sophisticated "Cream-on-Cream" palette, we create a sense of depth and prestige. We move beyond the "flat" web through tonal layering, where elements don't just sit on a grid—they float and breathe like fine silk laid upon textured paper.

---

## 2. Colors

The palette is rooted in the "Batik Sogan" tradition: deep earth tones, shimmering gold accents, and warm off-whites.

| Token | Value | Role |
| :--- | :--- | :--- |
| `surface` | #fcf9f2 | The "base paper." Use this for the primary background. |
| `primary` | #361f1a | The "Deep Sogan." For primary text and high-contrast elements. |
| `secondary` | #775a19 | The "Prada Gold." For accents, icons, and sophisticated highlights. |
| `surface-container-low` | #f6f3ec | For subtle sectioning of the page. |
| `surface-container-highest`| #e5e2db | For "pressed" or deeply inset elements. |

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections. Boundaries must be created through background color shifts. For example, a `surface-container-low` section should sit flush against a `surface` background. If an element requires separation, use white space or a change in tonal depth.

### Signature Textures & Glassmorphism
To avoid a "flat" appearance, use a subtle 5-10% opacity Batik Parang pattern overlay on `surface_variant` containers. For floating modals or navigation bars, use **Glassmorphism**:
*   **Background:** `surface` at 80% opacity.
*   **Backdrop Blur:** 12px to 20px.
*   **Effect:** This creates a "frosted glass" look that allows the warm Javanese textures to bleed through.

---

## 3. Typography

The typography strategy is a dialogue between the old world and the new.

*   **Display & Headlines (Noto Serif):** This is our "Voice of Tradition." It carries the weight and elegance of Javanese script through a modern serif lens. Use `display-lg` for the couple's names with increased letter spacing (0.05em) to command the page.
*   **Body & Titles (Plus Jakarta Sans):** This is our "Functional Luxury." A clean, modern sans-serif that ensures high legibility for event details, addresses, and RSVP forms.

**Typography Hierarchy Note:** 
Always prioritize high-contrast scales. A `display-lg` headline should often be paired with a `body-md` description to create a sophisticated, editorial "white space" effect.

---

## 4. Elevation & Depth

We eschew traditional material shadows for **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface_container_lowest` card on top of a `surface_container_low` background to create a soft, natural lift.
*   **Ambient Shadows:** If a floating action (like a "Send RSVP" button) requires a shadow, use a large blur (24px) with a 6% opacity of the `on_surface` color. It should look like a soft glow of light, not a dark drop shadow.
*   **The "Ghost Border":** If containment is strictly required for accessibility, use the `outline_variant` token at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons (The "Seal")
*   **Primary:** `primary` background with `on_primary` text. Use a subtle gradient from `primary` to `primary_container` to give it a "wax seal" richness.
*   **Secondary:** `surface` background with a `secondary` (Gold) Ghost Border (15% opacity).
*   **Shape:** Use `md` (0.375rem) roundedness to maintain a classic feel. Avoid "full" pill shapes as they feel too casual/tech-oriented.

### Cards & Lists
*   **No Dividers:** Forbid the use of horizontal lines. To separate list items (e.g., event itinerary), use vertical spacing of `24px` and subtle `surface-container-low` backgrounds for every second item.
*   **Gunungan Accent:** Use the Gunungan motif as a "Background Hero" for cards, using the `secondary_fixed_dim` color at 10% opacity, positioned slightly off-center.

### Input Fields
*   **Style:** Minimalist. Only a bottom border using `outline_variant` (20% opacity). 
*   **Focus State:** The bottom border transitions to `secondary` (Gold) with a subtle `label-sm` text fade-in.

### Custom Component: The "Motif Divider"
Instead of a line, use a small, repeating `floral motif (melati)` or a single `Gunungan` icon to separate major narrative sections (e.g., "The Love Story" vs. "The Wedding Ceremony").

---

## 6. Do's and Don'ts

### Do:
*   **Use Intentional Asymmetry:** Align text to the left but place a decorative Batik pattern on the far right to create "balance through tension."
*   **Embrace Large Margins:** High-end design lives in the margins. Use generous padding (`64px` to `128px` on desktop) to let the content breathe.
*   **Layer with Transparency:** Allow Gunungan vectors to overlap section boundaries to break the "boxed-in" feel.

### Don't:
*   **Don't use Pure Black:** Never use #000000. Use `primary` (#361f1a) for the deepest tones to maintain the organic, "Sogan" warmth.
*   **Don't use Standard Grids:** Avoid the "3-column card row." Try a staggered 2-column layout where one card is slightly lower than the other.
*   **Don't Over-Animate:** Animations should be "Slow & Deliberate." Use subtle fades and "slide-up" transitions (duration: 600ms) rather than bouncy or fast effects.

---

## 7. Imagery & Iconography

*   **Iconography:** Use "Thin-Stroke" icons (0.5pt to 1pt). Where possible, replace standard icons with custom Javanese-inspired silhouettes (e.g., a Melati flower instead of a heart icon).
*   **Imagery:** Photos should have a warm, slightly desaturated filter to harmonize with the `surface` and `primary` color tokens. Avoid high-contrast, "neon" photography.```