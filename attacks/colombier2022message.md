---
source: https://www.researchgate.net/publication/358536126
year: 2022
authors: Brice Colombier, Vlad-Florin Dragoi, Pierre-Louis Cayrel, Vincent Grosso
family:
  - code
  - KEM
scheme:
  - McEliece
scenario: static key
leaked: session key
implementation:
  - SW
adversarial:
  - observe
  - profile
possible countermeasures:
  - masking
target:
  - pointwise multiplication
techniques:
  - profiling/deep-learning
  - cryptanalysis
implementation source: Not mentioned concretely but seems to be reference implementation
---
# Message-recovery Profiled Side-channel Attack on the Classic McEliece Cryptosystem