# RBC × realtor.ca 出口卡片重设计

**背景**

During my internship on RBC's Mortgage Pre-Approval Tool team, we ran a referral partnership with realtor.ca. Users interested in getting pre-approved could click through from realtor.ca directly into our tool. Once they completed the flow, our agreement required an exit path back to realtor.ca.

The starting point looked simple. Our confirmation and result pages already featured an RBC-owned "Houseful" card in that exit slot. My task was to redesign that card to follow realtor.ca's branding guidelines instead.

[Image: Original Houseful card on the confirmation and result pages]

**Challenge 1: Branding guidelines vs. readability**

realtor.ca's guidelines called for wide margins around their logo. Applied strictly, the logo would render too small to read clearly inside our existing card component, which felt unprofessional and unusable.

I raised this with my mentor and proposed an adjusted layout, then submitted it to realtor.ca as a request for an exception to their standard margin rule.

**Challenge 2: Brand color and an existing drop-off problem**

realtor.ca's brand color is a bold red, which stands out sharply against RBC's blue-and-white interface. Showing this card on the confirmation page risked compounding a problem our team was already tracking: many users stopped at the confirmation page and never reached the result page, mistakenly assuming the flow had ended.

I flagged that a highly visible red card at that point could add to the drop-off rather than help it.

**Proposing solutions**

I brought two options to the team:

1. Use realtor.ca's secondary black as the card color, making it less attention-grabbing. Lower development cost, but it would not meaningfully address the drop-off.
2. Remove the exit card from the confirmation page entirely and show it only on the result page. This required new logic to detect realtor.ca referrals and resize the remaining card to full width on the confirmation page for visual balance.

[Image: Full-width card layout on the confirmation page after the change]

**Outcome**

We presented both options to realtor.ca. They approved option 2, and also accepted the margin exception I had proposed earlier.

I then worked with our developer and visual designer to select a full-width card design and implement the logic end to end.
