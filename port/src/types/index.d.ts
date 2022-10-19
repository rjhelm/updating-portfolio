import React from "react";

export interface MacActions {
    setLogin: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    shutMac: (e: React.MouseEvent) => void;
    restartMac: (e: React.MouseEvent) => void;
    sleepMac: (e: React.MouseEvent) => void;
}

export {
    AppsData,
    LaunchpadData,
    WallpaperData
} from './configs';