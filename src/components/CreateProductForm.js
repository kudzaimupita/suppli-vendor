import React, { PureComponent } from "react";
import axios from "axios";
import { createPlug } from "../actions/plugs";
import { createProduct } from "../actions/products";
import { getSubCategories } from "../actions/subCatergories";
import { getCatergories } from "../actions/catergories";
import { Upload, message, Select as AntSelectm, Input } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import SignInModal from "../components/SignInModal";
import { useHistory, withRouter, Link } from "react-router-dom";
import ReactQuill from "react-quill";
import RegisterModal from "../components/RegisterModal";
// import Select from "../components/Select";
import Select from "react-select";
import TagsInput from "react-tagsinput";
import TagsCss from "../assets/css/bootstrap.css";
import "react-quill/dist/quill.snow.css";
import Dropzonee from "./Dropezone";
import ImgCrop from "antd-img-crop";
import { Fragment, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
// import { Dialog, Transition } from '@headlessui/react'
import { InboxOutlined } from '@ant-design/icons';
import {
    BellIcon,
    BookmarkAltIcon,
    CashIcon,
    CogIcon,
    FireIcon,
    HomeIcon,
    InboxIcon,
    KeyIcon,
    MenuIcon,
    PhotographIcon,
    SearchCircleIcon,
    UserIcon,
    ViewGridAddIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronLeftIcon } from '@heroicons/react/solid'


import {
    ListGroupItem,
    ListGroup,
    Button,
    Card,
    Label,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Row,
    Col,
    Progress,
    Spinner,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    Modal,
    Container,
} from "reactstrap";
const { Dragger } = Upload;
const { Option } = Select;
const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon },
    { name: 'Trending', href: '#', icon: FireIcon },
    { name: 'Bookmarks', href: '#', icon: BookmarkAltIcon },
    { name: 'Messages', href: '#', icon: InboxIcon },
    { name: 'Profile', href: '#', icon: UserIcon },
]
const subNavigation = [
    {
        name: 'Account',
        description: 'Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit.',
        href: '#',
        icon: CogIcon,
        current: true,
    },
    {
        name: 'Notifications',
        description: 'Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.',
        href: '#',
        icon: BellIcon,
        current: false,
    },
    {
        name: 'Security',
        description: 'Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis.',
        href: '#',
        icon: KeyIcon,
        current: false,
    },
    {
        name: 'Appearance',
        description: 'Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat.',
        href: '#',
        icon: PhotographIcon,
        current: false,
    },
    {
        name: 'Billing',
        description: 'Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris.',
        href: '#',
        icon: CashIcon,
        current: false,
    },
    {
        name: 'Integrations',
        description: 'Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque.',
        href: '#',
        icon: ViewGridAddIcon,
        current: false,
    },
    {
        name: 'Additional Resources',
        description: 'Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et.',
        href: '#',
        icon: SearchCircleIcon,
        current: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function getBase64(file, callback) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

class PlugApplication extends React.Component {
    componentDidMount() {
        this.props.getSubCategories();
        this.props.getCatergories();
    }
    toggleModal = (state) => {
        this.setState({
            [state]: !this.state[state],
        });
    };
    state = {
        selected: null,
        filelist: [],
        singleSelect: "",
        multipleSelect: "",
        select: null,
        tags: [],
        description: "",
        sizes: [],
        colors: [],
        price: "",
        name: "",
        description: "",
        subCatergory: [],
        quantityInStock: "",
        images: [],
        gender: "",
        brandName: "",
        imageCover: null,
        loading: false,
        previewVisible: false,
        previewImage: "",
        previewTitle: "",
        quickPoints: [],
        fileList: [],
        rows: [],
        rows1: [],
    };

    onChange = ({ fileList: newFileList }) => {
        this.setState({ filelist: newFileList });
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handleAddRow = () => {
        const item = {
            name: "",
        };
        this.setState({
            rows: [...this.state.rows, item],
        });
    };

    handleAddRowNested = () => {
        const item1 = {
            name1: "",
        };
        this.setState({
            rows1: [...this.state.rows1, item1],
        });
    };
    handleRemoveRow = (e, idx) => {
        if (typeof idx != "undefined")
            document.getElementById("addr" + idx).style.display = "none";
    };
    handleRemoveRowNested = (e, idx) => {
        document.getElementById("nested" + idx).style.display = "none";
    };
    handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle:
                file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
        });
    };

    handleChange = ({ fileList }) =>
        this.setState({ fileList, images: fileList.originFileObj });

    handleCoverChange = (info, file) => {
        if (info.file.status === "done") {
            this.setState({ loading: true });
            return;
        }
        this.setState({ imageCover: info.file.originFileObj });
        // this.setState({imageCover:info.file.})
        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl) =>
                this.setState({
                    imageUrl,
                    loading: false,
                })
            );
        }
    };

    beforeUpload(file) {
        const isJpgOrPng =
            file.type === "image/jpeg" ||
            file.type === "image/png" ||
            file.type === "image/jpg";
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG/JPEG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }

        return isJpgOrPng && isLt2M;
    }

    baseStyle = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#eeeeee",
        borderStyle: "dashed",
        backgroundColor: "#fafafa",
        color: "#bdbdbd",
        outline: "none",
        transition: "border .24s ease-in-out",
    };

    handleColorsChange = (colors) => {
        this.setState({ colors });
    };

    handleTagsChange = (tags) => {
        this.setState({ tags });
    };

    handleQuickPointsChange = (quickPoints) => {
        this.setState({ quickPoints });
    };
    handleSizesChange = (sizes) => {
        this.setState({ sizes });
    };
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleBrandNameChange = (e) => {
        this.setState({ brandName: e.target.value });
    };

    handleCover1Change = (e) => {
        this.setState({ imageCover: e.target.files[0] });

        // const file = e.target.files[0]
        // const formData = new FormData()
        // formData.append('image', file)
    };

    handlePriceChange = (e) => {
        this.setState({ price: e.target.value });
    };

    handleQuantityInStockChange = (e) => {
        this.setState({ quantityInStock: e.target.value });
    };

    handleSelectChange = (multipleSelect) => {
        this.setState({ multipleSelect });
        // this.setState({ subCatergory:multipleSelect.value });
    };

    handleSubCatergoryChange = (e) => {
        this.setState({ catergory: e.target.value });
    };
    // handleDescriptionChange = (e) => {
    //   this.setState({ description: e.target.value });
    // };
    handleReactQuillChange = (e) => {
        this.setState({ description: e.target.value });
    };
    handleAboutUsChange = (e) => {
        this.setState({ aboutUs: e.target.value });
    };

    handleCoverImageChange = (e) => {
        this.setState({ imageCover: URL.createObjectURL(e.target.files[0]) });
    };

    handleGenderChange = (singleSelect) => {
        this.setState({ singleSelect });
        // this.setState({ subCatergory:multipleSelect.value });
    };

    onSubmit = async (e) => {

        // if (this.state.fileList.length < 1)
        // 	return this.props.setAlert(
        // 		"Please add atleast 1 image of the product",
        // 		"danger"
        // 	);
        const data = new FormData();
        const img = this.state.filelist[0]?.originFileObj;
        if (!img)
            return this.props.setAlert(
                "Each product should have an image",
                "warning"
            );
        if (!this.state.price)
            return this.props.setAlert(
                "Each product should have a price",
                "warning"
            );
        if (!this.state.brandName)
            return this.props.setAlert(
                "Each product should have a brand name",
                "warning"
            );
        if (!this.state.quantityInStock)
            return this.props.setAlert(
                "Each product should have a quantity",
                "warning"
            );
        if (this.state.multipleSelect.length < 1)
            return this.props.setAlert(
                "Choose atleast one sub-category",
                "warning"
            );
        if (this.state.imageCover)
            this.state.fileList.unshift({ originFileObj: this.state.imageCover });
        data.append("name", this.state.name);
        data.append("brandName", this.state.brandName);
        this.state.multipleSelect &&
            data.append(
                "subCatergory",
                this.state.multipleSelect &&
                this.state.multipleSelect.map((subCatergory) => subCatergory.value)
            );
        data.append("imageCover", img);
        data.append("price", this.state.price);
        data.append("quantityInStock", this.state.quantityInStock);
        this.state.singleSelect &&
            data.append("gender", this.state.singleSelect.value);
        data.append("description", this.state.description);

        this.state.tags &&
            this.state.tags.map((item) => {
                data.append("tags", item);
            });

        this.state.colors.map((item) => {
            data.append("color", item);
        });
        this.state.sizes &&
            this.state.sizes.map((item) => {
                data.append("size", item);
            });
        this.state.quickPoints &&
            this.state.quickPoints.map((item) => {
                data.append("quickPoints", item);
            });

        this.state.fileList.map((item) => {
            data.append("images", item.originFileObj);
        });

        // const config = {
        //   headers: {

        //       "authorization" : `Bearer ${  localStorage.getItem("token")}`

        //   }
        // }

        // await axios.post("http://localhost:5000/api/v1/products", data, config);

        this.props.createProduct(data, this.props.history);
    };

    buttonSpinner = (
        <Spinner
            size="sm"
            style={{ marginRight: 6 }}
            // type="grow"
            color="white"
        />
    );
    handleSelectedd = (e) => {
        // e.preventDefault()
        console.log(e)
        this.setState({ selected: e })
    }
    // action = "https://www.mocky.io/v2/5cc8019d300000980a055e76"

    render() {
        const props = {
            name: 'file',
            multiple: true,
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange(info) {
                const { status } = info.file;
                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
            onDrop(e) {
                console.log('Dropped files', e.dataTransfer.files);
            },
        };
        const {
            loading,
            imageUrl,
            previewVisible,
            previewImage,
            fileList,
            previewTitle,
        } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        const settings = [
            { name: 'Packaged', description: 'This project would be available to anyone who has the link' },
            { name: 'Digital', description: 'Only members of this project would be able to access' },
            { name: 'Fresh', description: 'You are the only one able to access this project' },
        ]
        const onPreview = async (file) => {
            let src = file.url;
            if (!src) {
                src = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file.originFileObj);
                    reader.onload = () => resolve(reader.result);
                });
            }
            const image = new Image();
            image.src = src;
            const imgWindow = window.open(src);
            imgWindow.document.write(image.outerHTML);
        };
        console.log(this.state);
        const plans = [
            { name: 'Hobby', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD disk', price: '$40' },
            { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD disk', price: '$80' },
            { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD disk', price: '$160' },
            { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD disk', price: '$240' },
        ]
        console.log(this.state.selected)
        return (
            <>

                <div className="flex-1 max-h-screen xl:overflow-y-auto bg-gray-100 rounded-lg" >
                    <div className="max-w-3xl mx-auto py-4 px-4 sm:px-6 lg:py-12 lg:px-8">
                        <h1 className="text-3xl font-extrabold text-blue-gray-900">Add Product</h1>

                        <form className="mt-3 space-y-8 divide-y divide-y-blue-gray-200">
                            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                                {/* <div className="sm:col-span-6">
                                    <h2 className="text-xl font-medium text-blue-gray-900">Profile</h2>
                                    <p className="mt-1 text-sm text-blue-gray-500">
                                        This information will be displayed publicly so be careful what you share.
                                    </p>
                                </div> */}

                                <div className="sm:col-span-3">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-blue-gray-900">
                                        Product Name<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <Input

                                        placeholder='Product Name'
                                        required
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-blue-gray-900">
                                        Brand Name<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <Input
                                        placeholder='Brand Name'
                                        required
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        autoComplete="family-name"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-blue-gray-900">
                                        Price<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <Input

                                        placeholder='Product Name'
                                        required
                                        type="number"
                                        name="first_name"
                                        id="first_name"
                                        autoComplete="Price"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-blue-gray-900">
                                        Available Stock<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <Input
                                        placeholder='Available Stock'
                                        required
                                        type="number"
                                        name="last_name"
                                        id="last_name"
                                        autoComplete="family-name"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <hr className="sm:col-span-6" />
                                <div className="sm:col-span-6">
                                    <h2 className="text-xl font-medium text-blue-gray-900">Product Details</h2>
                                    {/* <p className="mt-1 text-sm text-blue-gray-500">
                                        This information will be displayed publicly so be careful what you share.
                                    </p> */}
                                </div>

                                <div className="sm:col-span-6">
                                    <label htmlFor="description" className="block text-sm font-medium text-blue-gray-900">
                                        Product Description<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <div className="mt-1">
                                        <Input.TextArea
                                            id="description"
                                            name="description"
                                            rows={4}
                                            className="block w-full border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                            defaultValue={''}
                                        />
                                    </div>

                                </div>
                                <div className="sm:col-span-6">
                                    <label htmlFor="description" className="block text-sm font-medium text-blue-gray-900">
                                        Sub-Category<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <div className="mt-1">
                                        <Select
                                            className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Select"
                                            name="multipleSelect"
                                            // closeMenuOnSelect={false}
                                            isMulti
                                            value={this.state.multipleSelect}
                                            onChange={this.handleSelectChange}
                                            options={this.props.catergories && this.props.catergories.map((el) => ({
                                                label: el.name,
                                                options: el.subCatergories.map((child) => ({
                                                    label: child.name,
                                                    value: child._id,
                                                })),
                                            }))}
                                        />

                                    </div>

                                </div>
                                <RadioGroup className="sm:col-span-6" value={this.state.selected} onChange={this.handleSelectedd}>
                                    <label htmlFor="first_name" className="block text-sm font-medium text-blue-gray-900">
                                        Product Type<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
                                    <div className="bg-white rounded-md -space-y-px">
                                        {settings.map((setting, settingIdx) => (
                                            <RadioGroup.Option
                                                key={setting.name}
                                                value={setting}
                                                className={({ checked }) =>
                                                    classNames(
                                                        settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                                        settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                                        checked ? 'bg-indigo-100 border-indigo-200 z-10' : 'border-gray-200',
                                                        'relative border p-2 flex cursor-pointer focus:outline-none'
                                                    )
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <span
                                                            className={classNames(
                                                                checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                                                                active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                                                'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                                                            )}
                                                            aria-hidden="true"
                                                        >
                                                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                                                        </span>
                                                        <div className="ml-3 flex flex-col">
                                                            <RadioGroup.Label
                                                                as="span"
                                                                className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium')}
                                                            >
                                                                {setting.name}
                                                            </RadioGroup.Label>
                                                            <RadioGroup.Description
                                                                as="span"
                                                                className={classNames(checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm')}
                                                            >
                                                                {setting.description}
                                                            </RadioGroup.Description>
                                                        </div>
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>

                                <div className="sm:col-span-6">
                                    <label htmlFor="username" className="block text-sm font-medium text-blue-gray-900">
                                        Key Features
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 text-blue-gray-500 sm:text-sm">
                                            workcation.com/
                                        </span>
                                        <Input

                                            required
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"

                                            className="flex-1 block w-full min-w-0 border-blue-gray-300 rounded-none rounded-r-md text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <hr className="sm:col-span-6" />
                                <div className="sm:col-span-6">
                                    <h2 className="text-xl font-medium text-blue-gray-900">Media</h2>
                                    {/* <p className="mt-1 text-sm text-blue-gray-500">
                                        This information will be displayed publicly so be careful what you share.
                                    </p> */}
                                </div>
                                <div className="sm:col-span-1">
                                    <label htmlFor="photo" className="block text-sm font-medium text-blue-gray-900">
                                        Photo
                                    </label>
                                    <div className="mt-1 flex items-center">

                                        <ImgCrop rotate>
                                            <Upload
                                                // className="inline-block h-12 w-12 rounded-full"
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture-card"
                                                fileList={this.state.filelist}
                                                onChange={this.onChange}
                                                onPreview={onPreview}
                                            >
                                                {this.state.filelist.length < 1 && "+ Upload"}
                                            </Upload>
                                        </ImgCrop>

                                    </div>
                                </div>
                                <div className="sm:col-span-5">
                                    <label htmlFor="photo" className="block text-sm font-medium text-blue-gray-900">
                                        Product Images
                                    </label>
                                    <div className="mt-1 flex items-center">

                                        <Dragger {...props}>
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                            <p className="ant-upload-hint">
                                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                                band files
                                            </p>
                                        </Dragger>
                                    </div>

                                </div>

                                <div className="sm:col-span-6">
                                    <label htmlFor="url" className="block text-sm font-medium text-blue-gray-900">
                                        URL
                                    </label>
                                    <Input
                                        type="text"
                                        name="url"
                                        id="url"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>



                            <div className="pt-3 flex justify-end">
                                <button
                                    type="button"
                                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            </>
        );
    }
}

PlugApplication.defaultProps = {
    catergories: [],
    subCatergories: [],
};

const mapStateToProps = (state) => ({
    auth: state.auth.isAuthenticated,
    isAuthenticated: state.auth,
    loading: state.auth.loading,
    createdPlugLoading: state.createdPlug.loading,
    subCatergories: state.subCatergories.subCatergories,
    catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, {
    createProduct,
    getSubCategories,
    getCatergories,
    setAlert,
    createPlug,
})(withRouter(PlugApplication));

// <Row>
// {" "}
// <Col sm="12" lg="12">
//   {" "}
//   <table style={{ width: "100%" }}>
//     <tbody>
//       <tr id="addr01" key="">
//         <td>
//           <Form
//             className="repeater"
//             encType="multipart/form-data"
//           >
//             <div data-repeater-list="group-a">
//               <Row data-repeater-item>
//                 <Col lg="10" className="mb-3">
//                   <Label htmlFor="name">Add Key Features</Label>
//                   <Input
//                     size="sm"
//                     type="text"
//                     id="name"
//                     name="untyped-input"
//                     className="form-control"
//                   />
//                 </Col>

//                 <Col lg="2" className="align-self-center">
//                   <div className="d-grid">
//                     <Button
//                       size="sm"
//                       onClick={(e) =>
//                         this.handleRemoveRow(e, "01")
//                       }
//                       color="primary"
//                       style={{ width: "100%" }}
//                       block
//                     >
//                       {" "}
//                       Delete Feature
//                     </Button>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </Form>
//         </td>
//       </tr>

//       {this.state.rows.map((item, idx) => (
//         <tr id={"addr" + idx} key={idx}>
//           <td>
//             <Form
//               className="repeater"
//               encType="multipart/form-data"
//             >
//               <div data-repeater-list="group-a">
//                 <Row data-repeater-item>
//                   <Col lg="10" className="mb-3">
//                     {/* <Label htmlFor="name">Key Feature</Label> */}
//                     <Input
//                       size="sm"
//                       type="text"
//                       id="name"
//                       name="untyped-input"
//                       className="form-control"
//                       // onChange={this.}
//                     />
//                   </Col>

//                   <Col lg="2" className="align-self-center">
//                     <div className="d-grid">
//                       <Button
//                         size="sm"
//                         onClick={(e) =>
//                           this.handleRemoveRow(e, idx)
//                         }
//                         color="primary"
//                         style={{ width: "100%" }}
//                         block
//                       >
//                         {" "}
//                         Delete Feature
//                       </Button>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//             </Form>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
//   <Button
//     size="sm"
//     onClick={this.handleAddRow}
//     color="success"
//     className="mt-3 mt-lg-0"
//   >
//     Add more features{" "}
//   </Button>{" "}
// </Col>
// </Row>
