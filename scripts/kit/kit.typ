// Print kit of one game: the rules sheet, then the ornate and the simple board.
// Built by scripts/build-kits.ts, which writes data.json, qr.svg and the board pages into `dir`.
// Text from the content always arrives as strings, so Typst never reads it as markup.

#let dir = sys.inputs.dir
// build-kits.ts sets history=no when the rules sheet would not fit on one page
#let with-history = sys.inputs.at("history", default: "yes") == "yes"
#let data = json(dir + "/data.json")

#let ink = rgb("#23201b")
#let muted = rgb("#6d675d")
#let mono = "DejaVu Sans Mono"

#set document(title: data.title + " · Jogos do Mundo", author: "Jogos do Mundo")
#set text(font: "Libertinus Serif", size: 10.5pt, lang: "pt", region: "BR", fill: ink, number-type: "old-style")
#set par(justify: true, leading: 0.62em, spacing: 0.95em)

#let runs(rs) = {
  for r in rs {
    let c = [#r.text]
    if r.bold { c = strong(c) }
    if r.italic { c = emph(c) }
    c
  }
}

#let blocks(bs) = {
  for b in bs {
    if b.type == "p" { par(runs(b.runs)) } else if b.type == "ol" { enum(..b.items.map(runs)) } else {
      list(..b.items.map(runs))
    }
  }
}

// Long titles shrink to fit the width instead of wrapping into the drawing
#let fitted(body, width, size) = context {
  let w = measure(text(size: size, body)).width
  text(size: if w > width { size * (width / w) } else { size }, body)
}

// ---- Sheet 1: rules, set like a LaTeX article ----

#set page(
  paper: "a4",
  margin: (x: 24mm, top: 24mm, bottom: 20mm),
  header: {
    set text(size: 9pt, style: "italic", fill: muted)
    grid(columns: (1fr, auto), [Jogos do Mundo], data.title)
    v(-5pt)
    line(length: 100%, stroke: 0.4pt + ink)
  },
  footer: context align(center, text(size: 9pt, counter(page).display())),
)
#set heading(numbering: "1")
#show heading: set text(size: 12.5pt)
#show heading: set block(above: 1.5em, below: 0.85em)
#set enum(spacing: 0.7em)
#set list(spacing: 0.7em)

#align(center)[
  #v(2mm)
  #fitted(data.title, 150mm, 30pt)
  #v(1.5mm)
  #text(size: 12pt, style: "italic", data.family)
  #v(0.5mm)
  #text(size: 10pt, fill: muted, tracking: 0.05em, smallcaps(data.status))
]

#v(3mm)
#pad(x: 12mm)[
  #set text(size: 9.5pt)
  #align(center, text(weight: "bold", size: 9pt, smallcaps[Resumo]))
  #v(-1mm)
  #blocks(data.summary)
]

#v(3mm)
#align(center, text(size: 9.5pt)[#smallcaps[Tabela 1.] Ficha do jogo])
#v(-1mm)
#{
  set par(justify: false)
  set text(size: 9.5pt, number-type: "lining")
  table(
    columns: (auto, 1fr),
    stroke: none,
    column-gutter: 5mm,
    inset: (x: 0pt, y: 3.2pt),
    table.hline(stroke: 0.8pt),
    ..data.facts.map(f => (emph(f.at(0)), f.at(1))).flatten(),
    table.hline(stroke: 0.8pt),
  )
}

= Regras
#blocks(data.rules)

#if data.history.len() > 0 and with-history [
  = História
  #blocks(data.history)
] else if data.history.len() > 0 [
  #text(size: 9.5pt, style: "italic", fill: muted)[A história deste jogo não coube nesta folha e está no site.]
]

#heading(numbering: none)[Referências]
#{
  set par(justify: false)
  set text(size: 9pt)
  for (i, r) in data.refs.enumerate() {
    let shown = r.url.replace(regex("^https?://"), "")
    grid(
      columns: (7mm, 1fr),
      row-gutter: 0pt,
      [\[#(i + 1)\]], [#r.title. #link(r.url, text(font: mono, size: 7.5pt, shown))],
    )
    v(1.5pt)
  }
}

#v(2mm)
#text(size: 8.5pt, fill: muted)[#smallcaps(data.status): #emph(data.statusHelp)]

#v(1fr)
#line(length: 100%, stroke: 0.4pt + ink)
#grid(
  columns: (22mm, 1fr),
  column-gutter: 4mm,
  align: horizon,
  image(dir + "/qr.svg", width: 20mm),
  {
    set par(justify: false)
    set text(size: 8.5pt, fill: muted)
    [_Jogos do Mundo_, atlas de jogos de tabuleiro tradicionais. Mapa, nomes locais e fontes completas em #link(data.url, text(font: mono, size: 7.5pt, fill: ink, data.url.replace(regex("^https://"), ""))). Licença a definir.]
  },
)
// Page where the rules sheet ends, read back by `typst query`
#context [#metadata(here().page()) <rules-end>]

// ---- Sheets 2 and 3: the board, ornate then simple ----

#if data.board {
  page(margin: 0pt, header: none, footer: none)[
    #place(top + left, image(dir + "/ornate.svg", width: 100%, height: 100%))
    #place(top + center, dy: 27mm, align(center)[
      #fitted(data.title, 140mm, 40pt)
      #v(-2mm)
      #text(size: 11pt, style: "italic", data.family)
    ])
    #place(bottom + center, dy: -24mm, text(size: 8pt, fill: muted, tracking: 0.08em, smallcaps[jogos do mundo]))
  ]
  page(margin: 0pt, header: none, footer: none)[
    #place(top + left, image(dir + "/simple.svg", width: 100%, height: 100%))
    #place(bottom + center, dy: -13mm, align(center)[
      #fitted(text(style: "italic", data.title), 160mm, 20pt)
      #v(-3mm)
      #text(size: 8pt, fill: muted, tracking: 0.08em, smallcaps[jogos do mundo])
    ])
  ]
}
