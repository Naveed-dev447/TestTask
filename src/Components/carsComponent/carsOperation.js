import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Modal
} from "react-native";
import { showSmallToast } from '../Toast/Toast';
import { addCarsData, deleteCarById, getCarsData } from '../Services/carsServices';
const carsOperation = () => {
    const [list, setList] = useState([]);
    const [visible, setViisble] = useState(false);

    const [carName, setCarName] = useState("");
    const [carColor, setCarColor] = useState("");
    const [carRegistration, setCarRegistration] = useState("");
    const [carMake, setCarMake] = useState();
    const [carModel, setCarModel] = useState();
    const [hideId, setHideId] = useState(null);

    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        getCarsData()
            .then(res => {
                setList(res)
            })
            .catch(err => {
                showSmallToast(`Error: ${err}`);
            });

    }

    const handelDetete = (id) => {
        deleteCarById(id)
            .then(res => {
                getList();
            })
            .catch(err => {
                showSmallToast(`Error Deleted: ${err}`);
            });
    }

    const addUpdateCars = () => {
        if (carName && carColor && carRegistration && carMake && carModel) {
            let data = {
                name: carName,
                color: carColor,
                registration: carRegistration,
                model: carModel,
                make: carMake
            }
            addCarsData(hideId, data)
                .then(res => {
                    getList();
                    setViisble(!visible);
                })
                .catch(err => {
                    showSmallToast(`Error: ${err}`);
                });
        } else {
            showSmallToast('You missed some field!');
        }
    }
    const handleEdit = (item) => {
        setViisble(true)
        setHideId(item.id)
        setCarName(item.name);
        setCarColor(item.color);
        setCarRegistration(item.registration);
        setCarMake(item.make)
        setCarModel(item.model)

    }

    const handleVisibleModal = () => {
        setViisble(!visible);
        setHideId(null);
        setCarName('');
        setCarColor('');
        setCarRegistration('');
        setCarMake('');
        setCarModel('');
    }

    return (
        <SafeAreaView>
            <View style={styles.header_container}>
                <Text style={styles.txt_main}>Cars {list?.length}</Text>
                <TouchableOpacity
                    onPress={handleVisibleModal}
                    style={styles.btnNewContainer}
                >
                    <Text style={styles.textButton}>Add Car</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                visible={visible}
            >
                <SafeAreaView>
                    <View style={styles.form}>
                        <TouchableOpacity
                            onPress={handleVisibleModal}
                        >
                            <Text style={styles.txtClose}>
                                Close
                            </Text>
                        </TouchableOpacity>
                        <TextInput
                            value={carName}
                            style={styles.text_input}
                            placeholder="Car Name"
                            onChangeText={(carName) => setCarName(carName)}
                        />
                        <TextInput
                            value={carColor}
                            style={styles.text_input}
                            placeholder="Car Color"
                            onChangeText={(carColor) => setCarColor(carColor)}
                        />
                        <TextInput
                            value={carRegistration}
                            style={styles.text_input}
                            placeholder="Car Registration_no"
                            onChangeText={(carRegistration) => setCarRegistration(carRegistration)}
                        />
                        <TextInput
                            value={carMake}
                            style={styles.text_input}
                            placeholder="Maker"
                            onChangeText={(carMake) => setCarMake(carMake)}
                        />
                        <TextInput
                            value={carModel}
                            style={styles.text_input}
                            placeholder="Model"
                            onChangeText={(carMake) => setCarModel(carMake)}
                        />
                        <TouchableOpacity
                            onPress={addUpdateCars}
                            style={styles.btnContainer}
                        >
                            <Text style={styles.textButton}>
                                {hideId == null ? "Save" : "Update"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
            <ScrollView>
                {list?.map((item, index) => {
                    return (
                        <View style={styles.item_course} key={index}>
                            <View>
                                <Text style={styles.txt_name}>{index + 1}. {item.name}</Text>
                                <Text style={styles.txt_item}>{item.model}</Text>
                                <Text style={item.id == 9 ? styles.txt_enabled : styles.txt_disabled}>{item.id == 9 ? "Enabled" : "Available"}</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => handelDetete(item.id)}
                                >
                                    <Text style={styles.txt_del}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleEdit(item)}
                                >
                                    <Text style={styles.txt_edit}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default carsOperation;

const styles = StyleSheet.create({

    form: {
        padding: 15,
        // backgroundColor : "#e3e3e3",
        marginTop: 10
    },

    txtClose: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "right"
    },
    text_input: {
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        marginTop: 10
    },
    header_container: {
        padding: 15,
        backgroundColor: "#eeeeee",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txt_main: {
        fontSize: 22,
        fontWeight: "bold"
    },
    item_course: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#e2e2e2",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txt_name: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: "bold"
    },
    txt_item: {
        fontSize: 14,
        marginTop: 5
    },
    txt_enabled: {
        fontSize: 14,
        marginTop: 5,
        color: "green",
        fontWeight: "bold"
    },
    txt_disabled: {
        fontSize: 14,
        marginTop: 5,
        color: "green",
        fontWeight: "bold"
    },
    txt_del: {
        fontSize: 14,
        marginTop: 5,
        color: "red",
        fontWeight: "bold"
    },
    txt_edit: {
        fontSize: 14,
        marginTop: 5,
        color: "blue",
        fontWeight: "bold"
    },
    btnContainer: {
        display: 'flex',
        padding: 15,
        backgroundColor: "#000",
        marginTop: 20,
        borderRadius: 5,

    },
    btnNewContainer: {
        padding: 10,
        backgroundColor: "#000",
    },
    textButton: {
        textAlign: "center",
        color: "#FFF"
    },
})