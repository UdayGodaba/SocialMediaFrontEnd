import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src={`https://${process.env.REACT_APP_DOMAIN_NAME}/assets/info4.jpeg`}
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>PandaCosmetics</Typography>
                <Typography color={medium}>pandacosmetics.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Your pathway to stunning beauty and made sure your skin
                is shining like light.
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;