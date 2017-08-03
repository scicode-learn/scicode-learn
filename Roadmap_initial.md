# Initial Roadmap

The goal of scicode-learn is to facilitate learning to program for scientists, particularly for people who have no prior programming experience. Programming is generally a useful skill regardless of scientific discipline and is also an important facet of developing reproducible analysis pipelines. scicode-learn will primarily be an aggregator website, where existing (external) resources are effectively entries in a database.

There are two main tasks that need to be fulfilled to make sci-code functional.

## 1. Database format
Resources need to be stored with some minimal descriptive information. The current list of necessary information (fields) is:

- label/short name (unique)
- url
- resource type (cheatsheet, course, book, etc.)
- short description (1 sentence max)
- keywords (e.g., if field specific)
- image (may not be necessary? could be algorithmically related to label)

Each programming language (Python, Matlab, R) would have it's own database file.

I first thought that the database would be a CSV flat-file database, but it may be better to be have each entry as an individual markdown file, see staticgen example below.

:star2: **Task:** Determine database format

:star2: **Task:** Add some initial entries and see if any additional fields would be beneficial

:star2: **Task:** Try and get others to add entries and see if database format can be improved

## 2. Front-end interface
The database is the core portion of scicode-learn, but it also needs to have a good interface/UX. This is particularly important since the primary users have no experience programming and I would rather not 'overwhelm' them with a more minimal interface (e.g., as in the https://github.com/sindresorhus/awesome approach).

This front-end needs to be able to parse the database into a sort of gallery/tiled interface, with a box for each entry along with an image and perhaps can be filtered by keywords.

A good example of a target front-end is [staticgen](https://www.staticgen.com). Thankfully, staticgen has a guide on how their website functions, [staticgen/making-of.md](https://github.com/netlify/staticgen/blob/master/source/making-of.md). Of note, staticgen has an individual md file for each entry.

With the current plan, the front-end website needs to be compiled into a static website. Current ideas are to compile using heroku or a continuous integration tool (travis, circle, etc.). That said, I haven't used any of these services before.

:star2: **Task**: Scope out alternative website templates (as opposed to staticgen)

:star2: **Task:** Set-up initial front-end template

:star2: **Task:** Test implementation of automated compiling after commit

:star2: **Task:** How do Github webhooks work? ...are they relevant?

## 3+. Community building
With the initial framework established, the next major milestone will be to try and engage others in building the database. A framework is only useful if it is able to serve useful content.

Get exposure! Even with content, scicode-learn is only a success if the target demographic (i.e., scientists without programming experience) find the website useful. E.g., sufficient initial database content, friendly UI, 'advertising' of the website (share on twitter, tell your friends, etc.).

### Footnote
PS. Thanks to Mozilla Science Lab ([Boston WOW 2017](https://mozillascience.github.io/WOW-Boston/)) for providing guidance on working open and setting up an open project!
