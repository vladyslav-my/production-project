
import { DropDown } from "@/shared/ui/DropDown";
import { useTranslation } from "react-i18next";


export interface  DropDownOption {
	value: string;
	content: string;
}

const options: DropDownOption[] = [
	{ value: "1", content: "I33333" },
	{ value: "2", content: "Item2wqweqweqweqweqwqew" },
	{ value: "3", content: "Item3" },
	{ value: "5", content: "Item4" },
	{ value: "4", content: "Item5" },
];

const AboutPage = () => {
	const { t } = useTranslation("about");
	return (
		<div>
			{t("text")}
			<DropDown options={options} select={options[0].content}></DropDown>
		</div>
	);
};

export default AboutPage;
