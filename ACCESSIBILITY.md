# Accessibility Features

This portfolio website follows WCAG 2.1 AA accessibility guidelines to ensure an inclusive experience for all users.

## ✅ Implemented Features

### 1. **Skip Links**

- **Location**: Top of page (visible on focus)
- **Functionality**: Allows keyboard users to skip navigation and jump directly to main content
- **Keyboard**: Press `Tab` on page load to reveal skip link
- **Styling**: Yellow accent color with clear focus indicator

### 2. **Enhanced Focus Indicators**

All interactive elements have visible focus states:

#### Navigation Links

- 2px yellow outline with 4px offset
- Light yellow background highlight
- Smooth transitions on focus

#### Buttons & CTAs

- 3px yellow outline with 3px offset
- Glow effect with shadow (rgba(251, 190, 8, 0.25))
- Applies to: "Say Hello", "Contact Me", "View Projects", etc.

#### Form Inputs

- 2px red brand color outline
- Red border color
- Subtle red shadow effect
- Clear visual distinction from unfocused state

#### Project Cards

- Keyboard navigable (Tab/Shift+Tab)
- 3px red outline on focus
- Slight upward transform on focus
- Enter/Space to open project (primary link)

#### Social Icons

- 2px yellow outline
- Scale animation (1.15x) on focus
- Applies to LinkedIn, GitHub icons

### 3. **Semantic HTML**

```html
<header>
  - Navigation
  <main>
    - Main content area
    <nav>
      - Navigation menus
      <section>
        - Content sections
        <article>
          - Project cards
          <footer>- Site footer</footer>
        </article>
      </section>
    </nav>
  </main>
</header>
```

### 4. **ARIA Labels & Roles**

- `role="navigation"` - Main navbar
- `role="main"` - Main content wrapper
- `role="contentinfo"` - Footer
- `role="article"` - Project cards
- `aria-label` - Descriptive labels for icon buttons
- `aria-expanded` - Mobile menu toggle state
- `aria-controls` - Mobile menu connection
- `aria-hidden` - Decorative elements

### 5. **Keyboard Navigation**

All functionality is keyboard accessible:

- **Tab** - Navigate forward
- **Shift+Tab** - Navigate backward
- **Enter/Space** - Activate links and buttons
- **Escape** - Close mobile menu (future enhancement)

#### Mobile Menu

- Hamburger button: `aria-expanded` state
- Proper `aria-controls` connection
- Closes on navigation selection

### 6. **Color Contrast**

Tested color combinations meet WCAG AA standards:

- Body text: #222 on #f7f9fb ✓
- Brand color: #c04a4a with white text ✓
- Accent color: #fbbe08 with dark text ✓
- Muted text: #6b7280 on light backgrounds ✓

### 7. **Reduced Motion Support**

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations reduced to minimal duration */
  /* Scroll behavior set to auto */
}
```

Respects user's operating system settings for reduced motion.

### 8. **High Contrast Mode**

```css
@media (prefers-contrast: high) {
  /* Increased outline widths (4px) */
  /* Enhanced offset (4px) */
}
```

Automatically enhances focus indicators for users with high contrast preferences.

---

## 🧪 Testing Checklist

### Keyboard Navigation

- [ ] Tab through all navigation links
- [ ] Activate "Say Hello" button with Enter
- [ ] Navigate to project cards and activate with Enter/Space
- [ ] Access mobile menu with keyboard
- [ ] Navigate footer links

### Screen Reader Testing

- [ ] Test with NVDA (Windows)
- [ ] Test with JAWS (Windows)
- [ ] Test with VoiceOver (Mac)
- [ ] Verify all images have alt text
- [ ] Verify form labels are announced
- [ ] Verify section headings are properly nested

### Color & Contrast

- [ ] Test with color blindness simulators
- [ ] Verify text contrast ratios
- [ ] Test in high contrast mode
- [ ] Verify focus indicators are visible

### Motion Preferences

- [ ] Enable reduced motion in OS settings
- [ ] Verify animations are minimal
- [ ] Verify scroll behavior is instant

---

## 🔧 Future Enhancements

### Recommended Additions:

1. **Live Regions** - Add `aria-live` for dynamic content updates
2. **Form Validation** - Add descriptive error messages with `aria-describedby`
3. **ESC Key Handler** - Close mobile menu with Escape key
4. **Focus Trap** - Keep focus within mobile menu when open
5. **Page Title Updates** - Dynamic titles for single-page app sections
6. **Language Attribute** - Add `lang="en"` to HTML tag
7. **Landmark Roles** - Ensure all major sections have proper landmarks

---

## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Keyboard Testing Guide](https://webaim.org/articles/keyboard/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

## 🐛 Reporting Accessibility Issues

If you encounter any accessibility barriers, please:

1. Open an issue on GitHub
2. Include details about the barrier
3. Specify assistive technology used (if applicable)
4. Describe your expected behavior

Accessibility is an ongoing commitment, and your feedback helps make this site better for everyone.
