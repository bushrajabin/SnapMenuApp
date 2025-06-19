import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  Alert,
  SafeAreaView,
} from "react-native";
import Buttons from "@/components/Buttons";
import NavSideBar from "@/components/NavSideBar";
export default function TableManagementScreen() {
  const [tableCount, setTableCount] = useState<string>();
  const [tableList, setTableList] = useState<string[]>([]);
  const [selectedQR, setSelectedQR] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Generate tables based on input
  const handleGenerateTables = () => {
    if (!tableCount || isNaN(parseInt(tableCount))) {
      alert("Please enter a valid number of tables.");
      return;
    }

    const tables: string[] = [];
    for (let i = 1; i <= parseInt(tableCount); i++) {
      tables.push(`Table Number ${i}`);
    }
    setTableList(tables);
  };

  // Show QR preview
  const handleQRPreview = (table: string) => {
    setSelectedQR(table);
    setIsModalVisible(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedQR(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavSideBar title={"Table Settings"} />
      {/* Input for table count */}
      <Text style={styles.addTables}>Add Tables</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Number of Tables"
        keyboardType="numeric"
        value={tableCount}
        onChangeText={(value) => setTableCount(value)}
      />
      {/* Cancel Button */}
      <View style={styles.buttonContainer}>
        {/* Generate Button */}
        <TouchableOpacity>
          <Buttons title={"Generate"} onPress={handleGenerateTables} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTableCount("")}
          style={styles.cancelButton}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
      {/* Table List */}
      <ScrollView style={styles.tableList}>
        {tableList.map((table, index) => (
          <View key={index} style={styles.tableItem}>
            <Text style={styles.tableNumber}>{table}</Text>
            <TouchableOpacity onPress={() => handleQRPreview(table)}>
              <Text style={styles.qrPreview}>QR Code Preview</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* Modal for QR Preview */}
      {isModalVisible && (
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedQR}</Text>
              <View style={styles.qrContainer}>
                {/* <Text>QR Code Here!!!</Text> */}
              </View>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download QR</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      <TouchableOpacity style={styles.downloadAllQRButton}>
        <Buttons
          title={"Download All"}
          onPress={() => Alert.alert("successfully!!!")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  addTables: {
    textDecorationLine: "underline",
    backgroundColor: "whitesmoke",
    padding: 5,
    marginVertical: 10,
    textAlign: "center",
    fontSize: 18,
    marginRight: 70
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 20,
    paddingLeft: 7
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "grey",
    borderWidth: 2,
    fontWeight: "bold",
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  tableList: {
    // marginTop: 10,
    marginHorizontal: 20,
  },
  tableItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 15,
  },
  tableNumber: {
    fontWeight: "bold",
  },
  qrPreview: {
    color: "black",
    textDecorationLine: "underline",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrContainer: {
    marginBottom: 20,
  },
  qrPlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  downloadButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  downloadButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  closeButtonText: {
    color: "red",
    fontWeight: "bold",
  },
  downloadAllQRButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
  },
});
