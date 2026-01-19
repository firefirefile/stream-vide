import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector.js";

const getParams = (element, dataAttrSelector) => {
    return JSON.parse(
        element.getAttribute(
            getAttrNameFromSelector(dataAttrSelector),
        )
    )
}

export default getParams;