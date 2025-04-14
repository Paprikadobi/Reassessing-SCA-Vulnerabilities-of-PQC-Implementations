<%* let properties = tp.user.extract_properties(await tp.system.prompt('Google scholar citation', null, false, true)); -%>
<%*	tp.file.move('attacks/' + properties.ref) -%>
---
source: <% properties.url %>
year: <% properties.year %>
authors: 
family: 
scheme: 
scenario: 
leaked: 
implementation: 
adversarial: 
possible countermeasures: 
target: 
techniques: 
---
# <% properties.title %>