# [Dappspec](#)

- [[Dappspec](#)](#-dappspec----)
  - [Motivation](#motivation)
  - [Specification](#specification)
  - [Definitions](#definitions)
    - [Synopsis](#synopsis)
  - [CSS color variables](#css-color-variables)
    - [Color names](#color-names)
    - [Accessible Color Utilities](#accessible-color-utilities)
      - [luminance()](#luminance--)
      - [contrast()](#contrast--)
      - [create-contrast()](#create-contrast--)
    - [Grids](#grids)
  - [Testing](#testing)
  - [Building](#building)
    - [Iconography](#iconography)
  - [Usage](#usage)
  - [Notes](#notes)

> a _CSS_ design language for Natspec

**Dappspec** is a CSS design language for documentation built from Natspec.[^1]

It distills and simplifies both design elements and CSS for usage in contract documentation

> This is meant to facilitate a comprehensive documentation system for Smart Contracts.

## Motivation

Dappspec aims to make it easier for auditors and engineers to document their contracts and effectively presenting their application structure.


## Specification

> **Note**  
> Work in Progress


Dappspec provides the `$code(.layout)` class to manage page layouts.

This uses CSS grids with seven distinct areas that look like this:

<code>
    |--------------------------------------|
    |          header or .top              |
    |--------------------------------------|
    | .left  |--------------------| .right |
    |        |       .up          |        |
    |        |--------------------|        |
    |        |       main         |        |
    |        |                    |        |
    |        |                    |        |
    |        |--------------------|        |
    |        |       .down        |        |
    |        |--------------------|        |
    |--------------------------------------|
    |          footer or .bottom           |
    |--------------------------------------|
</code>

It does not matter what order you place the elements in, and you do not
have to use all the possible child elements. Layouts will place their
children in the appropriate places based on element names and classes.

Use a $code(header) child or any element with the $code(.top) class to
place a header at the top of the page, outside any sidebars. Use a
$code(footer) child or any element with the $code(.bottom) class to
place a footer at the bottom of the page, outside any sidebars. These
two classes are mostly used for headers and footers that are present
throughout an entire site.

They will fill available horizontal space, but they do not expand vertically past their content size.

Use an $code(aside) element or any element with the $code(.left) class
to create a left sidebar. Use any element with the $code(.right) class
(preferably an $code(aside) element) to create a right sidebar. These
will fill available vertical space, but they do not expand horizontally.
In fact, they will use as little space as possible, potentially wrapping
text to a single word. This is probably not what you want. They work this
way by default to give you more flexibility.

## Definitions

> **Warning**  
> Work in Progress

### Synopsis

Dappspec provides CSS definitions for a synopsis, which is often used at the
top of a topic to provide a quick overview. A synopsis often contains a
short paragraph, a bullet list, or a code block.

To use a synopsis, use the `$code(synopsis)` class on any` $code(div)`
element. A synopsis div should contain other block-level content.

## CSS color variables

Dappspec provides a set of CSS color variables for all colors it defines, as
well as a set of Sass variables that reference these CSS color variables.
The CSS color variables are set on the $code(:root) selector. They are
defined to the actual color values that are computed from the theme
color values, as described above.

These variables come in three forms: the explicit day and night forms,
and a form that resolves to the default scheme, not the user's preferred
scheme as provided by the browser. If you reference them, you should also
use media queries to match on the preferred color scheme, unless you
explicitly want to override this preference.

Dappspec also provides a set of mixins to define text, background, and border
colors. These mixins take care of the media queries for you. They are
described below.

### Color names

This module provides a set of mixins for defining text, background, and
border colors. Each of these mixins takes a single argument, the name of
the color without specifying day or night. The mixin will output the
appropriate CSS, along with CSS to switch colors when the user prefers
dark mode.

### Accessible Color Utilities

#### luminance()

Calculates the relative luminance of a color, according to the W3C Web
Content Accessibility Guidelines. Returns a number between 0 and 1.

[see https:www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef](https:www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef)

#### contrast()

Calculates the contrast ratio of two colors, according to the W3C Web
Content Accessibility Guidelines. Returns a number between 1 and 21.
Normal text should have a contrast ratio of at least 7 against the
background.

[see https:www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef](https:www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef)

#### create-contrast()

Attempts to create a color similar to a starting color, but with enough
contrast against a background color. This function will move the HSL
lightness of $code($color) away from $code($bg) in steps until the
contrast ratio between the new color and $code($bg) is at least
$code($target). It does not adjust the hue or saturation.

It's possible to pass arguments for which this algorithm can't create
a sufficiently contrasting color. This function will give up after a
maximum number of adjustments and just return whatever it's calculated
so far. It will issue a warning when this happens.

### Grids

The various grid classes allow you to make a grid of items that reflow
horizontally using CSS grids. These grids are designed to adjust to
different screen sizes.

The basic $code(.grid) class uses four columns on desktop, three columns
on tablets, and two columns on mobile. You can also specify exactly how
many columns at each size by using a specific class of the form

```sass
$code(.grid-$code(d)-$code(t)-$code(m)), where $code(d), $code(t), and
$code(m) are the number of columns on desktop, tablet, and mobile.
```

## Testing

Test files are in the `test/` directory. They test for CSS conformance.

> Note: additional coverage should be implemented for ARIA/A11y, etc.

## Building

Just run the `build.sh` script. It will output the CSS file into the `test`
directory, where you can view some static tests. Eventually, we'll want to
output build artifacts outside the tests, and to output for different themes.

> TODO: Build system and browser coverage

### Iconography

Dappspec uses some icons for certain design elements. It inherits these from
GNOME, but they'll probably change. In an attempt to not have a collection
of files, we embed the icons as data URIs into the CSS.

## Usage

You can build the CSS and copy it into your project.

> Dappspec is not ready for production use.

## Notes

[^1]: Semantic formats like Markdown, DITA, AsciiDoc, reStructuredText, etc, are forward compatible with Dappspec.
