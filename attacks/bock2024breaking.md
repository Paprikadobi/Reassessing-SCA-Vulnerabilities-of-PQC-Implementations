---
source: https://link.springer.com/chapter/10.1007/978-3-031-54773-7_5
year: 2024
authors: Estuardo Alpirez Bock, Gustavo Banegas, Chris Brzuska, Łukasz Chmielewski, Kirthivaasan Puniamurthy, Milan Šorf
family:
  - lattice/M-LWE
scheme:
  - Kyber
scenario: ephemeral key
leaked: secret key
implementation:
  - SW
adversarial:
  - observe
  - choose ciphertext
  - profile
possible countermeasures:
  - shuffling
target:
  - pointwise multiplication
techniques:
  - profiling/template
implementation source: maskedkyber2022
---
# Breaking DPA-Protected Kyber via the Pair-Pointwise Multiplication