import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  root: {
    boxShadow: "none",
  },
  tabs: {
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.divider,
    borderBottomStyle: "solid",
  },
  tab: {
    flex: 1,
    minWidth: "initial",
    padding: 0,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
  tabLabel: {
    fontSize: theme.typography.fontSize,
    textTransform: "capitalize",
    [theme.breakpoints.down(450)]: {
      fontSize: theme.typography.fontSize - 2,
    },
  },
  tabSubLabel: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.body1.fontSize,
    lineHeight: 1,
    [theme.breakpoints.down(450)]: {
      fontSize: theme.typography.fontSize - 2,
    },
  },
}));
