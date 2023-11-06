import { useTranslation } from "react-i18next";

export interface DropDownOption {
	value: string;
	content: string;
}

const AboutPage = () => {
	const { t } = useTranslation("about");
	return <div>{t("text")}</div>;
};

export default AboutPage;
