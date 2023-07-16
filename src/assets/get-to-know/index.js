import hexagonInactive from "./inactive-sidebar/hexagon.png"
import penInactive from "./inactive-sidebar/pen-tool.png"
import briefcaseInactive from "./inactive-sidebar/briefcase.png"
import trendInactive from "./inactive-sidebar/trending-up.png"
import calendarInactive from "./inactive-sidebar/calendar.png"
import dollarInactive from "./inactive-sidebar/dollar-sign.png"
import usersInactive from "./inactive-sidebar/users.png"
import toolInactive from "./inactive-sidebar/tool.png"
import shopInactive from "./inactive-sidebar/shopping-cart.png"
import softwareInactive from "./inactive-sidebar/software-i.svg"

import hexagonActive from "./active-sidebar/hexagon.png"
import penActive from "./active-sidebar/pen-tool.png"
import briefcaseActive from "./active-sidebar/briefcase.png"
import trendActive from "./active-sidebar/trending-up.png"
import calendarActive from "./active-sidebar/calendar.png"
import dollarActive from "./active-sidebar/dollar-sign.png"
import usersActive from "./active-sidebar/users.png"
import toolActive from "./active-sidebar/tool.png"
import shopActive from "./active-sidebar/shopping-cart.png"
import softwareActive from "./active-sidebar/software-a.svg"

export default [
  {
    desc: "THE EXECUTIVES",
    inactive: hexagonInactive,
    active: hexagonActive,
  },
  {
    desc: "DESIGN SPECIALIST",
    inactive: penInactive,
    active: penActive,
  },
  {
    desc: "MARKETING AND BRANDING",
    inactive: shopInactive,
    active: shopActive,
  },
  {
    desc: "BUSINESS DEVELOPMENT",
    inactive: briefcaseInactive,
    active: briefcaseActive,
  },
  {
    desc: "TRAINING AND DEVELOPMENT",
    inactive: trendInactive,
    active: trendActive,
  },
  {
    desc: "HUMAN RESOURCES",
    inactive: usersInactive,
    active: usersActive,
  },
  {
    desc: "MANAGEMENT",
    inactive: calendarInactive,
    active: calendarActive,
  },
  {
    desc: "FINANCE",
    inactive: dollarInactive,
    active: dollarActive,
  },
  {
    desc: "HARDWARE",
    inactive: toolInactive,
    active: toolActive,
  },
  {
    desc: "SOFTWARE",
    inactive: softwareInactive,
    active: softwareActive,
  },
]
