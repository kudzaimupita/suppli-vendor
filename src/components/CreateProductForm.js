import React, { FC, useState } from "react";
import Select from "react-select";

import { menuItems } from "../../index";
import Label from "../../../../components/label/label";
import { CanGoNext } from "../../../../models/CanGoNext";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../../../store/types";
import {
    addWidgetAction,
    setShowModal,
} from "../../../../store/Widgets/reducer";

type TaskOption = {
    id: number;
    value: string;
    label: string;
};

export interface TaskOptions {
    options: Array<TaskOption>;
}

export const ENROL_CARD = {
    id: 1,
    value: "fld_enrol_card",
    label: "Enrol Card",
};

interface Props extends CanGoNext {}

const AddWidgetForm: FC<Props> = ({ onNext }) => {
    const showWizard = useSelector(
        (state: IAppState) => state.widgets.showModal
    );
    const dispatch = useDispatch();
    const staticLayout = useSelector(
        (state: IAppState) => state.widgets.staticLayout
    );

    const [widgetKey, setWidgetKey] = useState("");
    const [obj, setObj] = useState(null);

    const onSubmit = () => {
        if (widgetKey === "i" && !obj) {
            return alert("Please select a route");
        }
        dispatch(addWidgetAction(widgetKey, obj));
        dispatch(setShowModal(!showWizard));
    };
    return (
        <div className="pt-3 pr-3 h-full relative">
            <h2>Select a widget</h2>
            <></>{" "}
            <div className="flex flex-row pt-3">
                <div className="flex flex-col flex-1">
                    <Label
                        htmlFor={"status"}
                        className="text-xs text-gray-600 mt-1"
                        required
                    >
                        Widget Type
                    </Label>

                    <Select
                        onChange={(e) => setWidgetKey(e.value)}
                        options={staticLayout
                            .filter((el) => el.show === false)
                            .map((el) => ({ value: el.i, label: el.name }))}
                    />
                    {widgetKey && widgetKey === "i" && (
                        <>
                            <Label
                                htmlFor={"status"}
                                className="text-xs text-gray-600 mt-1"
                                required
                            >
                                Choose Route Link
                            </Label>

                            <Select
                                onChange={(e) => setObj(e)}
                                options={menuItems.map((el) => ({
                                    label: el.name,
                                    options: el.children.map((child) => ({
                                        label: child.name,
                                        value: `${el.route}/${child.route}`,
                                    })),
                                }))}
                            />
                        </>
                    )}
                </div>
            </div>
            <div className="flex flex-row justify-end absolute bottom-0 right-0 pr-3 pb-3 ">
                <button
                    // disabled={!valuee || !obj ? true : false}
                    className="flex rounded-lg bg-blue text-white p-2 shadow-lg"
                    style={{
                        backgroundColor: "#60A5FA",
                        marginLeft: "20px",
                    }}
                    type="button"
                    onClick={() => onSubmit()}
                >
                    Add a widget
                </button>
            </div>
        </div>
    );
};

export default AddWidgetForm;
