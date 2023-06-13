import InfosAccordion from "./InfosAccordion"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic"
import BorderStyleIcon from "@mui/icons-material/BorderStyle"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import shareIcon from "../../assets/icons/share-icon.svg"

function Accordions() {
  return (
    <div>
      <InfosAccordion
        icon={<LocalShippingIcon />}
        title={"Shipping & Returns"}
        text={
          'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."'
        }
      />
      <InfosAccordion
        icon={<AutoAwesomeMosaicIcon />}
        title={"Materials"}
        text={
          'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."'
        }
      />
      <InfosAccordion
        icon={<BorderStyleIcon />}
        title={"Dimensions"}
        text={
          'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."'
        }
      />
      <InfosAccordion
        icon={<FavoriteBorderIcon />}
        title={"Care Instructions"}
        text={
          'Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."'
        }
      />
      <button
        type="button"
        className="flex text-xs items-center gap-3 mt-3 px-4 text-gray"
      >
        <img className="w-5 h-5" src={shareIcon} alt="share" />
        <p>Share</p>
      </button>
    </div>
  )
}

export default Accordions
