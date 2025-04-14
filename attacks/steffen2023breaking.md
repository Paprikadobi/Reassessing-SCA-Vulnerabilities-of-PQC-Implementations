---
source: https://link.springer.com/chapter/10.1007/978-3-031-40003-2_25
year: 2023
authors: Hauke Steffen, Georg Land, Lucie Kogelheide, Tim Güneysu
family:
  - lattice/M-LWE
  - lattice/M-SIS
  - DSA
scheme:
  - Dilithium
scenario: static key
leaked: secret key
implementation:
  - HW
adversarial:
  - observe
possible countermeasures: 
target:
  - decoder
  - NTT
  - pointwise multiplication
techniques:
  - SPA
  - CPA
countermeasures:
  - masking
protected part:
  - NTT
---
# Breaking and Protecting the Crystal: Side-Channel Analysis of Dilithium in Hardware
