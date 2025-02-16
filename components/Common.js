// Input fields with a "Send OTP" option for bot loginScreen & Registration
export const initialInputFields = (includeOtp = false, showSendOtp = false) => {
  const fields = [
    {
      title: "Email",
      input: "",
      showSendOtp: showSendOtp,
    },
    {
      title: "Password",
      input: "",
    },
  ];

  if (includeOtp) {
    fields.push({
      title: "OTP",
      input: "",
    });
  }

  return fields;
};
import Icon from "react-native-vector-icons/AntDesign";

// Settings options

export const Setting = {
  inputFields: [
    {
      title: "Enter Restaurent Name",
      input: "",
    },
    {
      title: "Enter Restaurent Address",
      input: "",
    },
    {
      title: "Number of Table",
      input: "",
    },
    {
      title: "Enter phone Number",
      input: "",
    },
  ],
  hours: ["1hours", "2hours", "3hours", "4hours", "5hours", "6hours"],
  day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
};

// Offer Dish---

// Offer Dish with Icons
export const offerDishes = [
  {
    title: "Select Dish",
    input: "",
    icon: <Icon name="downcircleo" size={12} color="black" />, // Icon for dish selection
  },
  {
    title: "Expiry Date",
    input: "",
    icon: <Icon name="calendar" size={12} color="black" />, // Icon for expiry date
  },
  {
    title: "Enter Discount",
    input: "",
    icon: <Icon name="tago" size={12} color="black" />, // Icon for discount
  },
];
// Restaurent setting---
// export const RestaurentSetting = [
//   {
//     title: "Table Settings",
//     Icon: <Icon name="right" size={23} />,
//     path: "/RestaurantSettingPage/TableSetting",
//   },
//   {
//     title: "Manager Members",
//     Icon: <Icon name="right" size={23} />,
//     path: "/RestaurantSettingPage/ManageMember",
//   },
//   {
//     title: "In-House Delivery",
//     Icon: <Icon name="right" size={23} />,
//   },
//   // {
//   //   title: "Pay to order",
//   //   Icon: (
//   //     <ToggleSwitch
//   //       isOn={isPayToOrderOn}
//   //       onColor="green"
//   //       offColor="#ecf0f1"
//   //       size="small"
//   //       onToggle={setIsPayToOrderOn(isOn)}
//   //     />
//   //   ),
//   // },
// ];

// Orders page---
export const OrdersPage = [
  {
    title: "Active Orders",
    Icon: <Icon name="right" size={23} />,
    path: "/Orders/ActiveOrders",
  },
  {
    title: "Completed orders",
    Icon: <Icon name="right" size={23} />,
    path: "/Orders/Completed",
  },
  {
    title: "Rejected orders",
    Icon: <Icon name="right" size={23} />,
    path: "/Orders/Rejected",
  },
];
//manage members----
export const newMember = [
  {
    title: "Enter member email",
    input: "",
  },
  {
    title: "Enter member password",
    input: "",
  },
];
