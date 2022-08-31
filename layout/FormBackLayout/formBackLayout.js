import style from "./style.module.css";
import GridIcon from "../../icons/grid";
import CreateIcon from "../../icons/create";
import CameraIcon from "../../icons/camera";
import SunIcon from "../../icons/sun";
import SettingsIcon from "../../icons/settings";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Icon({ label, children }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={style.icons}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show ? (
        <div className={style.label}>
          <p>{label}</p>
        </div>
      ) : null}
    </div>
  );
}

export default function FormBackLayout({ children }) {
  const router = useRouter();
  const [darkTheme, setDarkTheme] = useState(undefined);
  const formId = router.query.formId;

  const handleToggle = () => {
    setDarkTheme((s) => !s);
  };
  
  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <>
      <div className={style.menu}>
        <Icon label="Home">
          <img width={25} height="25" src="/logo.png" />
        </Icon>
        <Icon label="Responses">
          <GridIcon
            onClick={() => router.push(`/${formId}/responses`)}
            className={style.icon}
            style={
              router.pathname.includes("responses") ? { stroke: "#1479ff" } : {}
            }
          />
        </Icon>
        <Icon label="Pricing">
          <CreateIcon
            onClick={() => router.push(`/${formId}/pricing`)}
            className={style.icon}
            style={
              router.pathname.includes("pricing") ? { stroke: "#1479ff" } : {}
            }
          />
        </Icon>
        <Icon label="Validate">
          <CameraIcon
            onClick={() => router.push(`/${formId}/validate`)}
            className={style.icon}
            style={
              router.pathname.includes("validate") ? { stroke: "#1479ff" } : {}
            }
          />
        </Icon>
        <Icon label="Settings">
          <SettingsIcon
            onClick={() => router.push(`/${formId}/settings`)}
            className={style.icon}
            style={
              router.pathname.includes("settings") ? { stroke: "#1479ff" } : {}
            }
          />
        </Icon>
        <Icon label="Dark/Light mode">
          <SunIcon onClick={() => handleToggle()} className={style.icon} />
        </Icon>
      </div>
      <main className={style.container}>
        <div></div>
        {children}
      </main>
    </>
  );
}
