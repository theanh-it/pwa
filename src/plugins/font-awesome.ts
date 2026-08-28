/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import icons and add them to the Library */
import {
  faHome,
  faArrowLeft,
  faMessage,
  faBell,
  faAddressCard,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCircle,
  faCircleDot,
  faSquare,
  faSquareCheck,
} from "@fortawesome/free-regular-svg-icons";

const icons = [
  faHome,
  faCircle,
  faCircleDot,
  faSquare,
  faSquareCheck,
  faArrowLeft,
  faMessage,
  faBell,
  faAddressCard,
  faNewspaper,
];

library.add(icons);

export { FontAwesomeIcon };
