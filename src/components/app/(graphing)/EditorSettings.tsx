import React, {useEffect, useState} from "react";
import {
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Tabs,
    Tab, Card, CardBody, Checkbox, Spacer
} from "@nextui-org/react";
import {IoMdSettings as SettingsIcon} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {GraphSettings, updateGraphSettings} from "@/redux/slices/graphSettingsSlice";
import {RootState} from "@/redux/store";


const GeneralSettings: React.FC<{ onChange: (s: GraphSettings) => void }> = ({ onChange }) => {
    const settings = useSelector((state: RootState) => state.graphSettings);
    const [showDarkGridLines, setShowDarkGridLines] = useState<boolean>(settings.showDarkGridLines);
    const [showLightGridLines, setShowLightGridLines] = useState<boolean>(settings.showLightGridLines);
    const [isMinimalThemeEnabled, setIsMinimalThemeEnabled] = useState<boolean>(settings.isMinimalThemeEnabled);

    useEffect(() => {
        onChange({
            showDarkGridLines,
            showLightGridLines,
            isMinimalThemeEnabled
        })
    }, [showDarkGridLines, showLightGridLines, isMinimalThemeEnabled]);
    
    return (
        <>
            <div className="flex flex-col gap-2">
                <Checkbox value="dark-grid-lines" isSelected={showDarkGridLines} onValueChange={setShowDarkGridLines}>
                    Dark grid lines
                </Checkbox>
                <Checkbox value="light-grid-lines" isSelected={showLightGridLines} isDisabled={isMinimalThemeEnabled} onValueChange={setShowLightGridLines}>
                    Light grid lines
                </Checkbox>
                <Checkbox value="minimal-theme" isSelected={isMinimalThemeEnabled} onValueChange={setIsMinimalThemeEnabled}>
                    Minimal theme
                </Checkbox>
            </div>
        </>
    )
}


const EditorSettings: React.FC = () => {
    const dispatch = useDispatch();
    const graphSettingsInStore = useSelector((state: RootState) => state.graphSettings);
    
    const {onOpen, isOpen, onOpenChange} = useDisclosure();
    
    const [graphSettings, setGraphSettings] = useState<GraphSettings>(graphSettingsInStore);

    function saveChanges() {
        dispatch(updateGraphSettings(graphSettings));
    }
    
    return (
        <>
            <Button isIconOnly variant="light" onPress={onOpen} className="text-2xl">
                <SettingsIcon />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                Graph Settings
                            </ModalHeader>
                            
                            <ModalBody>
                                <Tabs>
                                    
                                    <Tab key="general" title="General">
                                        <Card>
                                            <CardBody>
                                                <GeneralSettings onChange={setGraphSettings} />
                                            </CardBody>
                                        </Card>
                                    </Tab>

                                    <Tab key="domain-coloring" title="Domain Coloring">
                                        <Card>
                                            <CardBody>

                                            </CardBody>
                                        </Card>
                                    </Tab>

                                    <Tab key="riemann-sphere" title="Riemann Sphere">
                                        <Card>
                                            <CardBody>

                                            </CardBody>
                                        </Card>
                                    </Tab>
                                    
                                </Tabs>
                            </ModalBody>
                            
                            <ModalFooter>
                                <Button color="danger" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" variant="light" onPress={() => {saveChanges(); onClose();}}>
                                    Save
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default EditorSettings;