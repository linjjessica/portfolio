--Readme document for Jessica Lin, jessil46@uci.edu--

A reminder on academic integrity, as described in the syllabus.

In general, the course staff expects that you will look at code and examples from many online resources as part of the assignments, particularly to resolve syntax and understand frameworks. We expect that you'll use other libraries you find, and will even require it in some assignments. These practices are often critical to the work of developers today. The best developers are adept at interpreting the examples they see, customizing them to their specific situation, and citing their sources so they can find them later. We expect you to do the same.

While learning from examples is encouraged, attempting to pass an existing project or example from the web as your own is not allowed. If you ever have a question about what is or is not appropriate, feel free to ask the course staff!

Talking to classmates about class material, assignment requirements, etc. is a great way to verify ideas and get feedback. But this distinctly does *not* permit attempting to pass off someone else’s code as your own. Talking over ideas and approaches is allowed, but the work that you produce and submit must be your own.

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

11/10
- 1/1 Readme
- 2/2 Basic HTML content
- 1/1 Basic CSS styling
- 1/1 Advanced feature
- 2/2 Responsive layout
- 1/1 Passes validation checks
- 2/2 Embraces spirit of the assignment

2. What (a) basic features, (b) CSS features, and (c) advanced features did you include in your portfolio?

(a) Basic features

- Included one image, with descriptive alt attribute
- Included appropriate headings and paragraph text
- Links to external pages can be found in my hyperlinked email or the Github, LinkedIn, or Email buttons on the navbar
- Added cutom icons for the Github, LinkedIn, or Email Buttons

(b) CSS features

- Modified padding and margins to indent content and enhance readability
- Modified link and text color to be visually appealing
- Added custom font(s) from Google fonts to add more personality

(c) Advanced features

- Created a more complex page layout by including a navigation bar that uses scroll observation highlighting
- Embedded HTML5 media (.mov) with an appropriate fallback

3. Did you ignore any of the warnings or errors presented by the accessibility checker? If so, why does this not seem like an accessibility concern? If it's useful, you can consolidate your thoughts on multiple warnings/errors if the rationale is similar.

- 1.1 Text Alternatives: Provide text alternatives for any non-text content
I did not ignore the need for alt text. Every <img> on my site includes an alt attribute (and in some cases an aria-label) that describes the content or purpose of the image (e.g., logos, icons, screenshots, and my headshot). AChecker flags these as “manual check required” because it can’t automatically determine whether an alt description is equivalent to the image content. For my site, the images are primarily decorative icons/logos or supportive visuals, and the alt text is sufficient for screen reader users to understand what the image represents.

- 1.3 Adaptable (Info & Relationships, Lists, Direction)
I did not see these as true accessibility failures because the checker is prompting manual verification rather than identifying a concrete issue. My site layout and structure are still understandable when styles are removed because content is organized into clear sections (About, Experience, Skills, Projects, Extracurriculars). The report flags potential issues like list markup and text direction, but my page is in English and uses left-to-right direction (dir="ltr"), so there is no direction change that needs additional markup. The “visual lists may not be properly marked” warning is also a generic check; where I present lists of items (skills/experience bullets), I can confirm they are represented using appropriate HTML structure rather than relying only on visual spacing.

- 1.4 Distinguishable (Use of Color / Contrast / Images of Text)
I may ignore some of these warnings because they are not automatically detectable and my design does not rely on color alone to convey meaning. The icons/logos are images, but they are not the only way information is communicated (the surrounding headings and text still explain the content). Contrast warnings are also flagged as “may contain poor contrast,” but my primary text is high contrast against the background. If any icon images contain text (like a logo), I still provide an alt label so the information is available to screen readers.

- 2.1 Keyboard Accessible / 2.3 Seizures (Script warnings)
These warnings appear because AChecker cannot analyze my JavaScript file (script.js) to confirm keyboard support or flicker risk automatically. My script does not create flashing animations, rapid transitions, or other seizure-risk patterns. Also, key site functionality (navigation + content access) does not depend on complex custom UI controls; users can scroll and use standard links, which are keyboard accessible by default in HTML. Because these are generic “script may…” warnings without evidence of a specific issue, I treated them as low risk but still verified that the site can be navigated via keyboard (Tab/Enter).

- 2.4 Navigable (Skip link, link purpose, sitemap, headings)
Some warnings are true improvement opportunities rather than “ignored issues.” For example:
AChecker suggests a “skip to content” link. My site is a single-page layout and the navbar is short, so it’s still usable. Adding a "skip to content" link is not necissary because upon testing tab-navigation, my website is fairly easy to navigate even with just using the tab button.
“Link purpose may not be meaningful” is flagged because the header links are icons. I addressed this with descriptive alt/aria labels so the purpose is announced correctly.
“Site map missing” is not essential for a small single-page portfolio, and navigation is already available through the navbar. 

4. How long, in hours, did it take you to complete this assignment?

I had the website already built using React, but I refactored the site to not use it anymore. In total, I worked on it for 9 hours. 

5. What online resources did you consult when completing this assignment? (list specific URLs, describe queries to Generative AI, or use of AI-based code completion)

None.

6. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

None.

7. Is there anything special we need to know in order to run your code?

The only thing is that the navbar on the left 40% of the screen uses a JavaScript script in order to effective demonstrate navigation highlighting. The user should have JavaScript downloaded. Other than that, my index.html file should be able to open in a browser with no issues. 