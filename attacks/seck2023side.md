---
source: https://link.springer.com/chapter/10.1007/978-3-031-37679-5_5
year: 2023
authors: Boly Seck, Pierre-Louis Cayrel, Vlad-Florin Dragoi, Idy Diop, Morgan Barbier, Jean Belo Klamti, Vincent Grosso, Brice Colombier
family:
  - code
  - KEM
scheme:
  - McEliece
scenario: ephemeral key
leaked: secret key (part)
implementation:
  - SW
adversarial:
  - observe
  - profile
possible countermeasures:
  - masking
target:
  - loading Goppa polynomial
techniques:
  - profiling/template
---
# A Side-Channel Attack Against Classic McEliece When Loading the Goppa Polynomial