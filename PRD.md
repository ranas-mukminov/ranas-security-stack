# Planning Guide

Landing page showcasing open-source security and compliance tools for Russian SMB, presented as a tool catalog within the run-as-daemon.ru ecosystem.

**Experience Qualities**:
1. **Professional** - Engineering-focused, minimalist interface that conveys technical competence and reliability
2. **Accessible** - Simple Russian language that business owners and IT directors can understand without deep technical knowledge
3. **Utilitarian** - Clean information architecture focused on helping users quickly find relevant tools and next actions

**Complexity Level**: Content Showcase (information-focused)
This is a catalog/showcase page presenting 15 repository tools with filtering, simple navigation, and clear CTAs to GitHub repos and service offerings.

## Essential Features

**Header Navigation**
- Functionality: Brand identity and site navigation links
- Purpose: Establish continuity with main site and provide quick access to key pages
- Trigger: Page load, always visible
- Progression: Logo display → navigation links (Главная, Услуги, GitHub, Контакты) → small CTA button for implementation help
- Success criteria: Links work, visual consistency with run-as-daemon.ru maintained

**Hero Section**
- Functionality: Communicate page purpose and value proposition
- Purpose: Immediately clarify what the stack is, who it's for, and what action to take
- Trigger: Page load, first screen
- Progression: Bold headline → clear subheadline in business language → benefit highlights → dual CTAs (view tools / order implementation)
- Success criteria: Non-technical users understand the offering within 5 seconds

**Usage Guide Block**
- Functionality: Three-step process cards explaining how to use the stack
- Purpose: Reduce friction by making it clear this is actionable, not just documentation
- Trigger: Scroll after hero
- Progression: Step 1 (choose scenario) → Step 2 (share with IT specialist) → Step 3 (hire for implementation)
- Success criteria: Business owners understand they have options (DIY or hire)

**Category Filters**
- Functionality: Visual filter pills/toggles to highlight tool categories
- Purpose: Help users quickly orient to relevant compliance areas
- Trigger: User clicks category pill above tool grid
- Progression: Click filter → visual highlight → related tool cards emphasized
- Success criteria: Users can visually scan and identify tools by compliance domain

**Tool Repository Cards Grid**
- Functionality: Responsive grid of 15 repository cards with consistent structure
- Purpose: Present each tool with business context, GitHub link, and implementation CTA
- Trigger: Page scroll, filter interaction
- Progression: Scan grid → read card (tool name, description, "for whom", tags) → click GitHub or implementation CTA
- Success criteria: Cards are scannable, consistent, and provide clear next actions

## Edge Case Handling

- **Empty GitHub repositories**: Display cards even if repos don't exist yet, links still present
- **Mobile narrow screens**: Single column layout, readable text sizes, touch-friendly buttons
- **Long tool descriptions**: Truncate or use consistent height cards to maintain grid alignment
- **Filter confusion**: All tools visible by default, filters only highlight (not hide)
- **Slow GitHub loads**: No external API calls, static page, instant navigation

## Design Direction

The design should evoke **engineering reliability, minimalist professionalism, and utilitarian focus**. This is not a marketing site but a technical resource catalog. Users should feel they're accessing a curated, professional toolset from a trusted technical expert. The aesthetic must mirror run-as-daemon.ru exactly - same colors, same typography, same card styles - to feel like a native subdomain page.

## Color Selection

Matching the existing run-as-daemon.ru theme with engineering minimalism:

- **Primary Color**: `oklch(0.205 0 0)` - Deep neutral dark for primary actions, conveys seriousness and technical focus
- **Secondary Colors**: `oklch(0.97 0 0)` - Very light neutral gray for secondary elements, maintains minimal visual noise
- **Accent Color**: `oklch(0.97 0 0)` - Subtle accent same as secondary, no bright highlights to maintain engineering aesthetic
- **Foreground/Background Pairings**:
  - Background `oklch(1 0 0)` white: Foreground `oklch(0.145 0 0)` near-black text - Ratio 15.8:1 ✓
  - Primary `oklch(0.205 0 0)` dark: Primary-foreground `oklch(0.985 0 0)` white text - Ratio 14.2:1 ✓
  - Card `oklch(1 0 0)` white: Card-foreground `oklch(0.145 0 0)` near-black - Ratio 15.8:1 ✓
  - Muted `oklch(0.97 0 0)` light gray: Muted-foreground `oklch(0.556 0 0)` medium gray - Ratio 4.6:1 ✓

## Font Selection

Typography should convey technical precision and readability for business users scanning many tool descriptions.

- **Primary Typeface**: JetBrains Mono for headings and technical elements - monospace reinforces engineering identity
- **Body Typeface**: Inter for body text - clean, highly readable, professional sans-serif

- **Typographic Hierarchy**:
  - H1 (Page Title): JetBrains Mono Bold/48px/tight letter-spacing (-0.02em)
  - H2 (Section Headers): JetBrains Mono SemiBold/32px/normal letter-spacing
  - H3 (Card Titles): Inter SemiBold/20px/normal letter-spacing
  - Body (Descriptions): Inter Regular/16px/relaxed line-height (1.6)
  - Small (Tags, meta): Inter Medium/14px/normal line-height
  - Micro (GitHub links): Inter Regular/12px/slightly increased letter-spacing (0.01em)

## Animations

Animations should be minimal and functional, reinforcing state changes without drawing attention. Subtle hover states on interactive elements (cards, buttons, filters). Smooth scroll to tool grid when hero CTA clicked. Filter pills show gentle color transition on selection. Card hover lifts slightly with soft shadow increase. All transitions 200-300ms with ease-out curves. No decorative or flashy animations - this is a utilitarian catalog.

## Component Selection

- **Components**: 
  - Button (primary for "View tools"/"Order implementation", secondary for filter pills, ghost for navigation)
  - Card (container for each repository tool with consistent padding and structure)
  - Badge (small tags for 152-ФЗ, КИИ, Open Source, etc.)
  - Separator (subtle dividers between page sections)
  
- **Customizations**: 
  - Filter pills as Button variant with active state styling
  - Repository cards with fixed structure: title, GitHub subtitle, description, "for whom" list, tags row, dual CTAs
  - Header with logo text + nav links + small CTA button
  
- **States**:
  - Buttons: default (subtle), hover (slight darken/lift), active (pressed), disabled (muted)
  - Filter pills: inactive (muted), active (primary), hover (subtle highlight)
  - Cards: default (flat), hover (lifted shadow + border highlight)
  
- **Icon Selection**:
  - GithubLogo for GitHub links
  - CaretRight for navigation arrows
  - Funnel for filter indication
  - Check for step completion indicators
  - ArrowRight for CTA buttons
  
- **Spacing**: Consistent Tailwind scale - sections gap-16 to gap-24, cards gap-6, inner card padding p-6, grid gaps gap-6
  
- **Mobile**: 
  - Header: stack logo and nav, burger menu for links on narrow screens
  - Hero: single column, full-width CTAs stacked
  - Filter pills: horizontal scroll or wrap with gap
  - Tool grid: single column on mobile (<768px), 2 columns tablet (768-1024px), 3 columns desktop (>1024px)
