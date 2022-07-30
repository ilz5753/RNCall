import {
  mpbcbwType,
  Color,
  mpSize,
  brType,
  borderStyleType,
  fontWeightType,
  fontVariantType,
  textAlignType,
  textAlignVerticalType,
  textDecorationStyleType,
  textDecorationLineType,
  textTransformType,
  alignContentType,
  alignItemsType,
  alignSelfType,
  writingDirectionType,
  DirectionType,
  flexDirectionType,
  flexWrapType,
  justifyContentType,
  overflowType,
  resizeModeType,
} from "./style";
import { Dimensions, Platform } from "react-native";
export let backfaceVisibility = (isHidden = false) => ({
  backfaceVisibility: isHidden ? "hidden" : "visible",
});
/**
 *
 * @param {Color} color
 */
export let backgroundColor = (color) => ({ backgroundColor: color });
/**
 *
 * @param {mpbcbwType} type
 * @param {mpSize} size
 */
export let margin = (type, size) => {
  let m = {};
  switch (type) {
    case "t":
      m.marginTop = size;
      break;
    case "b":
      m.marginBottom = size;
      break;
    case "l":
      m.marginLeft = size;
      break;
    case "r":
      m.marginRight = size;
      break;
    case "s":
      m.marginStart = size;
      break;
    case "e":
      m.marginEnd = size;
      break;
    case "h":
      m.marginLeft = size;
      m.marginRight = size;
      break;
    case "v":
      m.marginTop = size;
      m.marginBottom = size;
      break;
    case "tl":
    case "lt":
      m.marginTop = size;
      m.marginLeft = size;
      break;
    case "tr":
    case "rt":
      m.marginTop = size;
      m.marginRight = size;
      break;
    case "bl":
    case "lb":
      m.marginBottom = size;
      m.marginLeft = size;
      break;
    case "br":
    case "rb":
      m.marginBottom = size;
      m.marginRight = size;
      break;
    case "th":
    case "ht":
      m.marginTop = size;
      m.marginLeft = size;
      m.marginRight = size;
      break;
    case "vr":
    case "rv":
      m.marginTop = size;
      m.marginBottom = size;
      m.marginRight = size;
      break;
    case "bh":
    case "hb":
      m.marginBottom = size;
      m.marginLeft = size;
      m.marginRight = size;
      break;
    case "vl":
    case "lv":
      m.marginTop = size;
      m.marginBottom = size;
      m.marginLeft = size;
      break;
    default:
      m.margin = size;
      break;
  }
  return m;
};
/**
 *
 * @param {mpbcbwType} type
 * @param {mpSize} size
 */
export let padding = (type, size) => {
  let p = {};
  switch (type) {
    case "t":
      p.paddingTop = size;
      break;
    case "b":
      p.paddingBottom = size;
      break;
    case "l":
      p.paddingLeft = size;
      break;
    case "r":
      p.paddingRight = size;
      break;
    case "s":
      p.paddingStart = size;
      break;
    case "e":
      p.paddingEnd = size;
      break;
    case "h":
      p.paddingLeft = size;
      p.paddingRight = size;
      break;
    case "v":
      p.paddingTop = size;
      p.paddingBottom = size;
      break;
    case "tl":
    case "lt":
      p.paddingTop = size;
      p.paddingLeft = size;
      break;
    case "tr":
    case "rt":
      p.paddingTop = size;
      p.paddingRight = size;
      break;
    case "bl":
    case "lb":
      p.paddingBottom = size;
      p.paddingLeft = size;
      break;
    case "br":
    case "rb":
      p.paddingBottom = size;
      p.paddingRight = size;
      break;
    case "th":
    case "ht":
      p.paddingTop = size;
      p.paddingLeft = size;
      p.paddingRight = size;
      break;
    case "vr":
    case "rv":
      p.paddingTop = size;
      p.paddingBottom = size;
      p.paddingRight = size;
      break;
    case "bh":
    case "hb":
      p.paddingBottom = size;
      p.paddingLeft = size;
      p.paddingRight = size;
      break;
    case "vl":
    case "lv":
      p.paddingTop = size;
      p.paddingBottom = size;
      p.paddingLeft = size;
      break;
    default:
      p.padding = size;
      break;
  }
  return p;
};
/**
 *
 * @param {mpbcbwType} type string
 * @param {Color} color
 * @returns
 */
export let borderColor = (type, color) => {
  let bc = {};
  switch (type) {
    case "t":
      bc.borderTopColor = color;
      break;
    case "b":
      bc.borderBottomColor = color;
      break;
    case "l":
      bc.borderLeftColor = color;
      break;
    case "r":
      bc.borderRightColor = color;
      break;
    case "s":
      bc.borderStartColor = color;
      break;
    case "e":
      bc.borderEndColor = color;
      break;
    case "h":
      bc.borderLeftColor = color;
      bc.borderRightColor = color;
      break;
    case "v":
      bc.borderTopColor = color;
      bc.borderBottomColor = color;
      break;
    case "tl":
    case "lt":
      bc.borderTopColor = color;
      bc.borderLeftColor = color;
      break;
    case "tr":
    case "rt":
      bc.borderTopColor = color;
      bc.borderRightColor = color;
      break;
    case "bl":
    case "lb":
      bc.borderBottomColor = color;
      bc.borderLeftColor = color;
      break;
    case "br":
    case "rb":
      bc.borderBottomColor = color;
      bc.borderRightColor = color;
      break;
    case "th":
    case "ht":
      bc.borderTopColor = color;
      bc.borderLeftColor = color;
      bc.borderRightColor = color;
      break;
    case "vr":
    case "rv":
      bc.borderTopColor = color;
      bc.borderBottomColor = color;
      bc.borderRightColor = color;
      break;
    case "bh":
    case "hb":
      bc.borderBottomColor = color;
      bc.borderLeftColor = color;
      bc.borderRightColor = color;
      break;
    case "vl":
    case "lv":
      bc.borderTopColor = color;
      bc.borderBottomColor = color;
      bc.borderLeftColor = color;
      break;
    default:
      bc.borderColor = color;
      break;
  }
  return bc;
};
/**
 *
 * @param {brType} type
 * @param {number} size
 */
export let borderRadius = (type, size) => {
  let br = {};
  switch (type) {
    case "be":
    case "eb":
      br.borderBottomEndRadius = size;
      break;
    case "bs":
    case "sb":
      br.borderBottomStartRadius = size;
      break;
    case "bl":
    case "lb":
      br.borderBottomLeftRadius = size;
      break;
    case "br":
    case "rb":
      br.borderBottomRightRadius = size;
      break;
    case "te":
    case "et":
      br.borderTopEndRadius = size;
      break;
    case "ts":
    case "st":
      br.borderTopStartRadius = size;
      break;
    case "tl":
    case "lt":
      br.borderTopLeftRadius = size;
      break;
    case "tr":
    case "rt":
      br.borderTopRightRadius = size;
      break;
    case "t":
      br.borderTopLeftRadius = size;
      br.borderTopRightRadius = size;
      break;
    case "b":
      br.borderBottomLeftRadius = size;
      br.borderBottomRightRadius = size;
      break;
    case "l":
      br.borderTopLeftRadius = size;
      br.borderBottomLeftRadius = size;
      break;
    case "r":
      br.borderTopRightRadius = size;
      br.borderBottomRightRadius = size;
      break;
    case "tbr":
      br.borderTopLeftRadius = size;
      br.borderTopRightRadius = size;
      br.borderBottomRightRadius = size;
      break;
    case "tbl":
      br.borderTopLeftRadius = size;
      br.borderTopRightRadius = size;
      br.borderBottomLeftRadius = size;
      break;
    case "btr":
      br.borderBottomLeftRadius = size;
      br.borderBottomRightRadius = size;
      br.borderTopRightRadius = size;
      break;
    case "btl":
      br.borderBottomLeftRadius = size;
      br.borderBottomRightRadius = size;
      br.borderTopLeftRadius = size;
      break;
    default:
      br.borderRadius = size;
      break;
  }
  return br;
};
/**
 *
 * @param {mpbcbwType} type
 * @param {number} size
 */
export let borderWidth = (type, size) => {
  let bw = {};
  switch (type) {
    case "t":
      bw.borderTopWidth = size;
      break;
    case "b":
      bw.borderBottomWidth = size;
      break;
    case "l":
      bw.borderLeftWidth = size;
      break;
    case "r":
      bw.borderRightWidth = size;
      break;
    case "s":
      bw.borderStartWidth = size;
      break;
    case "e":
      bw.borderEndWidth = size;
      break;
    case "h":
      bw.borderLeftWidth = size;
      bw.borderRightWidth = size;
      break;
    case "v":
      bw.borderTopWidth = size;
      bw.borderBottomWidth = size;
      break;
    case "tl":
    case "lt":
      bw.borderTopWidth = size;
      bw.borderLeftWidth = size;
      break;
    case "tr":
    case "rt":
      bw.borderTopWidth = size;
      bw.borderRightWidth = size;
      break;
    case "bl":
    case "lb":
      bw.borderBottomWidth = size;
      bw.borderLeftWidth = size;
      break;
    case "br":
    case "rb":
      bw.borderBottomWidth = size;
      bw.borderRightWidth = size;
      break;
    case "th":
    case "ht":
      bw.borderTopWidth = size;
      bw.borderLeftWidth = size;
      bw.borderRightWidth = size;
      break;
    case "vr":
    case "rv":
      bw.borderTopWidth = size;
      bw.borderBottomWidth = size;
      bw.borderRightWidth = size;
      break;
    case "bh":
    case "hb":
      bw.borderBottomWidth = size;
      bw.borderLeftWidth = size;
      bw.borderRightWidth = size;
      break;
    case "vl":
    case "lv":
      bw.borderTopWidth = size;
      bw.borderBottomWidth = size;
      bw.borderLeftWidth = size;
      break;
    default:
      bw.borderWidth = size;
      break;
  }
  return bw;
};
/**
 *
 * @param {borderStyleType} type
 */
export let borderStyle = (type) => {
  let bs = "solid";
  switch (type) {
    case ".":
      bs = "dotted";
      break;
    case "-":
      bs = "dashed";
      break;
    default:
      break;
  }
  return {
    borderStyle: bs,
  };
};
/**
 *
 * @param {number} size
 */
export let elevationANDROID = (size) => ({ elevation: size });
/**
 *
 * @param {number} size
 */
export let opacity = (size) => ({ opacity: size });
/**
 *
 * @param {Color} color
 */
export let color = (color) => ({ color });
/**
 *
 * @param {string} fontFamily
 */
export let fontFamily = (fontFamily) => ({ fontFamily });
/**
 *
 * @param {number} size
 */
export let fontSize = (size) => ({ fontSize: size });
export let fontStyle = (isItalic = false) => ({
  fontStyle: isItalic ? "italic" : "normal",
});
/**
 *
 * @param {fontWeightType} type
 */
export let fontWeight = (type) => {
  let bs = "normal";
  switch (type) {
    case "b":
      bs = "bold";
      break;
    case "1":
      bs = "100";
      break;
    case "2":
      bs = "200";
      break;
    case "3":
      bs = "300";
      break;
    case "4":
      bs = "400";
      break;
    case "5":
      bs = "500";
      break;
    case "6":
      bs = "600";
      break;
    case "7":
      bs = "700";
      break;
    case "8":
      bs = "800";
      break;
    case "9":
      bs = "900";
      break;
    case "n":
    default:
      break;
  }
  return {
    fontWeight: bs,
  };
};
export let includeFontPaddingANDROID = (isSet = false) => ({
  includeFontPadding: isSet,
});
/**
 *
 * @param {fontVariantType} types
 */
export let fontVariant = (types) => {
  let fv = types.map((t) => {
    let r = "small-caps";
    switch (t) {
      case "on":
        r = "oldstyle-nums";
        break;
      case "ln":
        r = "lining-nums";
        break;
      case "tn":
        r = "tabular-nums";
        break;
      case "pn":
        r = "proportional-nums";
        break;
      default:
        break;
    }
    return r;
  });
  return {
    fontVariant: fv,
  };
};
/**
 *
 * @param {number} size
 */
export let letterSpacing = (size) => ({ letterSpacing: size });
/**
 *
 * @param {number} size
 */
export let lineHeight = (size) => ({ lineHeight: size });
/**
 *
 * @param {textAlignType} type
 * @returns
 */
export let textAlign = (type) => {
  let ta = "auto";
  switch (type) {
    case "l":
      ta = "left";
      break;
    case "r":
      ta = "right";
      break;
    case "c":
      ta = "center";
      break;
    case "j":
      ta = "justify";
      break;
    default:
      break;
  }
  return {
    textAlign: ta,
  };
};
/**
 *
 * @param {textAlignVerticalType} type
 */
export let textAlignVerticalANDROID = (type) => {
  let tav = "auto";
  switch (type) {
    case "t":
      tav = "top";
      break;
    case "b":
      tav = "bottom";
      break;
    case "c":
      tav = "center";
      break;
    default:
      break;
  }
  return {
    textAlignVertical: tav,
  };
};
/**
 *
 * @param {Color} color
 */
export let textDecorationColorIOS = (color) => ({ textDecorationColor: color });
/**
 *
 * @param {textDecorationLineType} type
 * @returns
 */
export let textDecorationLine = (type) => {
  let tdl = "none";
  switch (type) {
    case "u":
      tdl = "underline";
      break;
    case "l":
      tdl = "line-through";
      break;
    case "ul":
      tdl = "underline line-through";
      break;
    default:
      break;
  }
  return {
    textDecorationLine: tdl,
  };
};
/**
 *
 * @param {textDecorationStyleType} type
 * @returns
 */
export let textDecorationStyleIOS = (type) => {
  let tds = "solid";
  switch (type) {
    case ".":
      tds = "dotted";
      break;
    case "-":
      tds = "dashed";
      break;
    case "d":
      tds = "double";
      break;
    default:
      break;
  }
  return {
    textDecorationStyle: tds,
  };
};
/**
 *
 * @param {Color} color
 */
export let textShadowColor = (color) => ({ textShadowColor: color });
/**
 *
 * @param {number} width
 * @param {number} height
 */
export let textShadowOffset = (width = 0, height = 0) => ({
  textShadowOffset: { width, height },
});
/**
 *
 * @param {number} size
 */
export let textShadowRadius = (size) => ({ textShadowRadius: size });
/**
 *
 * @param {textTransformType} type
 */
export let textTransform = (type) => {
  let tt = "none";
  switch (type) {
    case "u":
      tt = "uppercase";
      break;
    case "l":
      tt = "lowercase";
      break;
    case "c":
      tt = "capitalize";
      break;
    default:
      break;
  }
  return {
    textTransform: tt,
  };
};
/**
 *
 * @param {writingDirectionType} type
 */
export let writingDirectionIOS = (type) => {
  let wd = "auto";
  switch (type) {
    case "l":
      wd = "ltr";
      break;
    case "r":
      wd = "rtl";
      break;
    default:
      break;
  }
  return {
    writingDirection: wd,
  };
};
/**
 *
 * @param {Color} color
 */
export let shadowColor = (color) => ({ shadowColor: color });
/**
 *
 * @param {number} width
 * @param {number} height
 */
export let shadowOffsetIOS = (width = 0, height = 0) => ({
  shadowOffset: { width, height },
});
/**
 *
 * @param {number} size
 */
export let shadowOpacityIOS = (size) => ({ shadowOpacity: size });
/**
 *
 * @param {number} size
 */
export let shadowRadiusIOS = (size) => ({ shadowRadius: size });
/**
 *
 * @param {alignContentType} type
 */
export let alignContent = (type) => {
  let ac = "center";
  switch (type) {
    case "fs":
      ac = "flex-start";
      break;
    case "fe":
      ac = "flex-end";
      break;
    case "sa":
      ac = "space-around";
      break;
    case "sb":
      ac = "space-between";
      break;
    case "s":
      ac = "stretch";
      break;
    default:
      break;
  }
  return {
    alignContent: ac,
  };
};
/**
 *
 * @param {alignItemsType} type
 */
export let alignItems = (type) => {
  let ac = "center";
  switch (type) {
    case "fs":
      ac = "flex-start";
      break;
    case "fe":
      ac = "flex-end";
      break;
    case "s":
      ac = "stretch";
      break;
    case "b":
      ac = "baseline";
      break;
    default:
      break;
  }
  return {
    alignItems: ac,
  };
};
/**
 *
 * @param {alignSelfType} type
 */
export let alignSelf = (type) => {
  let ac = "auto";
  switch (type) {
    case "fs":
      ac = "flex-start";
      break;
    case "fe":
      ac = "flex-end";
      break;
    case "s":
      ac = "stretch";
      break;
    case "b":
      ac = "baseline";
      break;
    case "c":
      ac = "center";
      break;
    default:
      break;
  }
  return {
    alignSelf: ac,
  };
};
/**
 *
 * @param {number} size
 */
export let aspectRatio = (size) => ({ aspectRatio: size });
/**
 *
 * @param {mpSize} size
 */
export let bottom = (size) => ({ bottom: size });
/**
 *
 * @param {DirectionType} type
 */
export let direction = (type) => {
  let d = "inherit";
  switch (type) {
    case "l":
      d = "ltr";
      break;
    case "r":
      d = "rtl";
      break;
    default:
      break;
  }
  return {
    direction: d,
  };
};
export let display = (isNone = false) => ({
  display: isNone ? "none" : "flex",
});
/**
 *
 * @param {mpSize} size
 */
export let end = (size) => ({ end: size });
/**
 *
 * @param {number} size
 */
export let flex = (size) => ({ flex: size });
/**
 *
 * @param {mpSize} size
 */
export let flexBasis = (size) => ({ flexBasis: size });
/**
 *
 * @param {flexDirectionType} type
 */
export let flexDirection = (type) => {
  let fd = "column";
  switch (type) {
    case "r":
      fd = "row";
      break;
    case "rc":
      fd = "row-reverse";
      break;
    case "cc":
      fd = "column-reverse";
      break;
    default:
      break;
  }
  return {
    flexDirection: fd,
  };
};
/**
 *
 * @param {number} size
 */
export let flexGrow = (size) => ({ flexGrow: size });
/**
 *
 * @param {number} size
 */
export let flexShrink = (size) => ({ flexShrink: size });
/**
 *
 * @param {flexWrapType} type
 * @returns
 */
export let flexWrap = (type) => {
  let fw = "nowrap";
  switch (type) {
    case "w":
      fw = "wrap";
      break;
    case "wr":
      fw = "wrap-reverse";
      break;
    default:
      break;
  }
  return {
    flexWrap: fw,
  };
};
/**
 *
 * @param {mpSize} size
 */
export let height = (size) => ({ height: size });
/**
 *
 * @param {justifyContentType} type
 */
export let justifyContent = (type) => {
  let jc = "center";
  switch (type) {
    case "fe":
      jc = "flex-end";
      break;
    case "fs":
      jc = "flex-start";
      break;
    case "sa":
      jc = "space-around";
      break;
    case "sb":
      jc = "space-between";
      break;
    case "se":
      jc = "space-evenly";
      break;
    default:
      break;
  }
  return {
    justifyContent: jc,
  };
};
/**
 *
 * @param {mpSize} size
 */
export let left = (size) => ({ left: size });

/**
 *
 * @param {mpSize} size
 */
export let maxHeight = (size) => ({ maxHeight: size });
/**
 *
 * @param {mpSize} size
 */
export let maxWidth = (size) => ({ maxWidth: size });
/**
 *
 * @param {mpSize} size
 */
export let minWidth = (size) => ({ minWidth: size });
/**
 *
 * @param {mpSize} size
 */
export let minHeight = (size) => ({ minHeight: size });
/**
 *
 * @param {overflowType} type
 */
export let overflow = (type) => {
  let o = "visible";
  switch (type) {
    case "s":
      o = "scroll";
      break;
    case "h":
      o = "hidden";
      break;
    default:
      break;
  }
  return {
    overflow: o,
  };
};
export let position = (isAbsolute = true) => ({
  position: isAbsolute ? "absolute" : "relative",
});
/**
 *
 * @param {mpSize} size
 */
export let right = (size) => ({ right: size });
/**
 *
 * @param {mpSize} size
 */
export let start = (size) => ({ start: size });
/**
 *
 * @param {mpSize} size
 */
export let top = (size) => ({ top: size });
/**
 *
 * @param {mpSize} size
 */
export let width = (size) => ({ width: size });
/**
 *
 * @param {number} size
 */
export let zIndex = (size) => ({ zIndex: size });
/**
 *
 * @param {string} color
 */
export let overlayColor = (color) => ({ overlayColor: color });
/**
 *
 * @param {resizeModeType} type
 */
export let resizeMode = (type) => {
  let rm = "cover";
  switch (type) {
    case "c":
      rm = "center";
      break;
    case "con":
      rm = "contain";
      break;
    case "s":
      rm = "stretch";
      break;
    case "r":
      rm = "repeat";
      break;
    default:
      break;
  }
  return {
    resizeMode: rm,
  };
};
/**
 *
 * @param {Color} color
 */
export let tintColor = (color) => ({ tintColor: color });

//  custom styles

export let jcfs = justifyContent("fs");
export let jcfe = justifyContent("fe");
export let jcc = justifyContent();
export let jcsb = justifyContent("sb");
export let jcsa = justifyContent("sa");
export let jcse = justifyContent("se");
export let aifs = alignItems("fs");
export let aife = alignItems("fe");
export let aic = alignItems();
export let ais = alignItems("s");
export let aib = alignItems("b");
export let center = [jcc, aic];
export let pa = position();
export let f1 = flex(1);
/**
 *
 * @param {mpSize} w
 * @param {mpSize} h
 */
export let layout = (w, h) => [width(w), height(h)];
/**
 *
 * @param {mpSize} size
 */
export let squareLayout = (size) => layout(size, size);

export let dim = Dimensions.get("screen");
export let fullWidth = width(dim.width);
export let fullHeight = height(dim.height);
export let root = [fullWidth, fullHeight];
export let fw = width("100%");
export let fh = height("100%");
export let full = [fw, fh];
export let row = [display(), flexDirection("r")];
