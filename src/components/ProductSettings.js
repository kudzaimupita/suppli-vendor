import React, { Component } from "react";
import axios from "axios";
import {
	ListGroupItem,
	ListGroup,
	Button,
	Card,
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
	Container,
} from "reactstrap";
import ImgCrop from "antd-img-crop";

import Select from "react-select";
import TagsInput from "react-tagsinput";
import TagsCss from "../assets/css/bootstrap.css";
import "react-quill/dist/quill.snow.css";
import Dropzonee from "./Dropezone";

import { createPlug } from "../actions/plugs";
import { createProduct, getProduct, updateProduct } from "../actions/products";
import { getSubCategories } from "../actions/subCatergories";
import { Upload, message, Select as AntSelect, Input } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import SignInModal from "../components/SignInModal";
import { useHistory, withRouter, Link } from "react-router-dom";
import ReactQuill from "react-quill";
import RegisterModal from "../components/RegisterModal";
import {
	selectCartItemsCount,
	selectCartTotal,
} from "../selectors/cartSelector";
// import Select from "../components/Select";

const { Option } = Select;

class PlugApplication extends Component {
	//     this.props.getProduct(this.props.match.params.id);

	componentDidMount() {
		this.props.getSubCategories();
		this.props.getProduct(this.props.match.params.id);
		this.props.product.product &&
			this.setState({
				product: this.props.product.product,
				// filelist: [].push(
				// 	`https://suppli-images.s3.af-south-1.amazonaws.com/${
				// 		this.props.product.product && this.props.product.product.imageCover
				// 	}`
				// ),
			});
	}

	toggleModal = (state) => {
		this.setState({
			[state]: !this.state[state],
		});
	};
	state = {
		// filelist: [],
		product: {},
		currentImages: this.props.product.product
			? this.props.product.product.images
			: [],
		singleSelect: "",
		multipleSelect: "",
		select: null,
		tags: this.props.product.product ? this.props.product.product.tags : [],
		description: this.props.product.product
			? this.props.product.product.description
			: "",
		sizes: this.props.product.product ? this.props.product.product.size : [],
		colors: [],
		price: "",
		name: "",
		// description: "",
		subCatergory:
			this.props.product.product &&
			this.props.product.product.quickPoints.map((item) => item),
		quantityInStock: "",
		images: [],
		gender: "",
		brandName: "",
		imageCover: null,
		loading: false,
		previewVisible: false,
		previewImage: "",
		previewTitle: "",
		quickPoints: this.props.product.product
			? this.props.product.product.quickPoints
			: [],
		filelist: [],
	};

	message;
	imageUrl;

	onChange = ({ fileList: newFileList }) => {
		this.setState({ filelist: newFileList });
	};

	getBase64 = (file, callback) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.addEventListener("load", () => callback(reader.result));
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	};

	handleCancel = () => this.setState({ previewVisible: false });

	handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await this.getBase64(file.originFileObj);
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
		if (info.file.status === "uploading") {
			this.setState({ loading: true });
			return;
		}
		this.setState({ imageCover: info.file.originFileObj });
		// this.setState({imageCover:info.file.})
		if (info.file.status === "done") {
			// Get this url from response in real world.
			this.getBase64(info.file.originFileObj, (imageUrl) =>
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

	handleGenderChange = (singleSelect) => {
		this.setState({ singleSelect });
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

	createFile = async (url, type) => {
		if (typeof window === "undefined") return; // make sure we are in the browser
		const response = await fetch(url);
		const data = await response.blob();
		const metadata = {
			type: type || "image/jpeg",
		};
		return new File([data], url, metadata);
	};

	onSubmit = async (e) => {
		//     if (this.state.quickPoints && this.state.quickPoints.length < 5)
		//       return this.props.setAlert(
		//         "Please add 5 key features of your product",
		//         "danger"
		//       );

		const data = new FormData();
		const img = this.state.filelist[0]?.originFileObj;
        // if (!this.state.imageCover)
        //     return this.props.setAlert(
        //         "Each product should have an image",
        //         "warning"
        //     );
        // if (!this.state.price)
        //     return this.props.setAlert(
        //         "Each product should have a price",
        //         "warning"
        //     );
        // if (!this.state.brandName)
        //     return this.props.setAlert(
        //         "Each product should have a brand name",
        //         "warning"
        //     );
        // if (!this.state.quantityInStock)
        //     return this.props.setAlert(
        //         "Each product should have a quantity",
        //         "warning"
        //     );
        // if (this.state.subCatergory < 1)
        //     return this.props.setAlert(
        //         "Choose atleast one sub-category",
        //         "warning"
        //     );
		if (img) data.append("imageCover", img);
		// if (this.state.imageCover)
		// 	this.state.fileList.unshift({ originFileObj: this.state.imageCover });
		this.state.name && data.append("name", this.state.name);
		this.state.brandName && data.append("brandName", this.state.brandName);
		// this.state.multipleSelect && data.append('subCatergory',this.state.multipleSelect && this.state.multipleSelect.map(subCatergory=>subCatergory.value))
		this.state.imageCover && data.append("imageCover", this.state.imageCover);
		this.state.singleSelect &&
			data.append("gender", this.state.singleSelect.value);
		this.state.price && data.append("price", this.state.price);
		this.state.quantityInStock &&
			data.append("quantityInStock", this.state.quantityInStock);

		this.state.description &&
			data.append("description", this.state.description);

		this.state.multipleSelect &&
			this.state.multipleSelect.map((item) => {
				data.append("subCatergory", item.value);
			});

		this.state.tags &&
			this.state.tags.map((item) => {
				data.append("tags", item);
			});

		this.state.colors &&
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
		// this.setState({})
		// console.log(
		// 	this.state.fileList.map((file) =>
		// 		this.createFile(`http://localhost:5000/img/products/${file}`)
		// 	)
		// );

		this.state.fileList &&
			this.state.fileList.map((item) => {
				data.append("images", item.originFileObj);
			});

		this.props.updateProduct(
			this.props.product.product && this.props.product.product._id,
			data,
			this.props.history
		);
	};

	buttonSpinner = (
		<Spinner
			size="sm"
			style={{ marginRight: 6 }}
			// type="grow"
			color="white"
		/>
	);

	render() {
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
		console.log(this.state.filelist);
		// console.log(this.props.product.product  && this.props.product.product.name)
		return (
			<>
                {this.props.loading && <div
                    className="example"
                    style={{
                        marginTop: '3000px',
                        borderRadius: ' 4px',
                        textAlign: 'center',
                        // margin: ' 20px 0',
                        marginBottom: '20px',
                        padding: '40px 90px',
                        background: '#fff',
                        zIndex: '99',
                        width: '100%',
                        height: '100%',
                        margin: 'auto',
                        display: 'block',
                        position: 'relative',
                    }}>
                    <Spinner size="large" />
                </div>}
				<Card className="bg-white shadow" style={{ marginBottom: 20 }}>
					<CardHeader className="bg-secondary border-0">
						<Row className="align-items-center">
							<Col xs="8">
								<h3 className="mb-0">Edit product</h3>
							</Col>
							<Col className="text-right" xs="4">
								<Link to="/admin/products">
									{" "}
									<Button color="primary" href="#pablo" size="sm">
										View all products
									</Button>
								</Link>
							</Col>
						</Row>
					</CardHeader>
					<hr style={{ marginTop: "0", marginBottom: "10px" }}></hr>
					<Container>
						<Form
							key={this.props.product.product && this.props.product.product._id}
						>
							<Row>
								<Col md="6">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Name<span className="text-danger"> *</span>
										</label>
										<Input
											className="form-control"
											id="input-username"
											//  placeholder="eg Russell Hobbs fruit blender "
											type="text"
											name="name"
											//  value={this.state.name}
											onChange={this.handleNameChange}
											defaultValue={
												this.props.product.product &&
												this.props.product.product.name
											}
										/>
									</FormGroup>
								</Col>
								<Col
									lg="6"
									md="6"
									style={{ paddingBottom: "0", paddingTop: "0" }}
								>
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Brand name<span className="text-danger"> *</span>
										</label>
										<Input
											className="form-control"
											id="input-email"
											//  placeholder="eg Russell Hobbs"
											type="text"
											name="brandName"
											//  value={this.state.brandName}
											onChange={this.handleBrandNameChange}
											defaultValue={
												this.props.product.product &&
												this.props.product.product.brandName
											}
										/>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col sm="12" md="6">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Price<span className="text-danger"> *</span>
										</label>
										<Input
											htmlFor="example-number-input"
											className="form-control"
											id="input-first-name"
											placeholder="eg 2999 no decimals"
											type="number"
											name="price"
											required
											defaultValue={
												this.props.product.product &&
												this.props.product.product.price
											}
											onChange={this.handlePriceChange}
										/>
									</FormGroup>
								</Col>
								<Col sm="12" md="6">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Quantity in stock<span className="text-danger"> *</span>
										</label>
										<Input
											htmlFor="example-number-input"
											className="form-control"
											//  placeholder="eg 53 no decimals"
											type="number"
											name="quantityInStock"
											defaultValue={
												this.props.product.product &&
												this.props.product.product.quantityInStock
											}
											onChange={this.handleQuantityInStockChange}
										/>
									</FormGroup>
								</Col>
								<Col sm="12" lg="6" md="6">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Sub-catergories<span className="text-danger"> *</span>
										</label>
										<Select
											className="react-select react-select-info"
											classNamePrefix="react-select"
											placeholder="Select"
											name="multipleSelect"
											// closeMenuOnSelect={false}
											isMulti
											defaultValue={
												this.props.product.product &&
												this.props.product.product.subCatergory.map(
													(subCatergory) => ({
														value: subCatergory._id,
														label: subCatergory.name,
													})
												)
											}
											onChange={this.handleSelectChange}
											options={
												this.props.subCatergories &&
												this.props.subCatergories.map((subCatergory) => ({
													value: subCatergory._id.toString(),
													label: subCatergory.name.toString(),
												}))
											}
										/>
									</FormGroup>
								</Col>
								{/* <Col>
									{" "}
									<label
										className="labels"
										htmlFor="input-country"
										style={{ fontSize: "13px" }}
									>
										Gender<span className="text-danger"> *</span>
									</label>{" "}
									<Select
										size="sm"
										className="react-select react-select-primary"
										classNamePrefix="react-select"
										name="singleSelect"
										defaultValue={
											this.props.product.product && {
												value: this.props.product.product.gender,
												label: this.props.product.product.gender,
											}
										}
										onChange={this.handleGenderChange}
										options={[
											{ value: "unisex", label: "Unisex" },
											{ value: "female", label: "Female" },
											{ value: "male", label: "Male" },
										]}
										placeholder="Choose gender"
									/>
								</Col> */}
							</Row>

							<Row>
								<Col md="12">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Product description<span className="text-danger"> *</span>
										</label>

										<Input
											className="form-control"
											id="input-email"
											style={{ height: "40px" }}
											//  placeholder="eg Russell Hobbs"
											type="textarea"
											rows="4"
											name="brandName"
											defaultValue={
												this.props.product.product &&
												this.props.product.product.description
											}
											onChange={this.handleQuantityInStockChange}
										/>

										{console.log(
											this.props.product.product && this.props.product.product
										)}
									</FormGroup>
								</Col>
								<Col xl="3" md="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Add New Image<span className="text-danger"> *</span>
										</label>
										<ImgCrop rotate>
											<Upload
												action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
												listType="picture-card"
												fileList={this.state.filelist}
												onChange={this.onChange}
												onPreview={onPreview}
												showUploadList={true}
											>
												{this.state.filelist.length < 1 && "+ Upload"}
											</Upload>
										</ImgCrop>
									</FormGroup>
								</Col>

								<Col xl="4" md="4">
									<FormGroup>
										{" "}
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Current image
										</label>
										{this.state.filelist.length <= 1 && (
											<img
												width={100}
												src={`https://suppli-images.s3.af-south-1.amazonaws.com/${
													this.props.product.product &&
													this.props.product.product.imageCover
												}`}
											/>
										)}
									</FormGroup>
								</Col>
							</Row>

							<Row>
								<Col
									lg="4
               "
								>
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Add 5 key points<span className="text-danger"> *</span>
										</label>

										<TagsInput
											// maxTags='5'
											// defaultValue={this.props.product.product ? this.props.product.product.quickPoints:[]}
											value={this.state.quickPoints}
											onChange={this.handleQuickPointsChange}
											tagProps={{ className: "react-tagsinput-tag info" }}
											placeholder="Add a tllag"
											//  placeholder='Add a tahhg'
										/>
									</FormGroup>
								</Col>
								{/* <Col lg="4">
									<FormGroup>
										<label className="labels" style={{ fontSize: "13px" }}>
											Sizes available
										</label>
										<TagsInput
											value={this.state.sizes}
											onChange={this.handleSizesChange}
											tagProps={{ className: "react-tagsinput-tag info" }}
										/>
									</FormGroup>
								</Col>{" "} */}
								<Col lg="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Tags
										</label>

										<TagsInput
											value={this.state.tags}
											onChange={this.handleTagsChange}
											tagProps={{ className: "react-tagsinput-tag info" }}
										/>
									</FormGroup>
								</Col>
							</Row>
						</Form>

						<Container>
							{" "}
							<Button
								block
								className="my-4"
								color="default"
								type="button"
								onClick={() => this.onSubmit()}
							>
								Update details
							</Button>{" "}
						</Container>
					</Container>
				</Card>
			</>
		);
	}
}

PlugApplication.defaultProps = {
	catergories: [],
	subCatergories: [],
	product: {},
};

const mapStateToProps = (state) => ({
	product: state.product.product,
	// isAuthenticated: state.auth,
	auth: state.auth.isAuthenticated,
	isAuthenticated: state.auth,

	createdPlugLoading: state.createdPlug.loading,
	subCatergories: state.subCatergories.subCatergories,
	cart: selectCartItemsCount(state),
	cartTotalPrice: selectCartTotal(state),
	plug: state.plug.plug,
	cartItems: state.cart.cartItems,
	user: state.auth.user,

	product: state.product.product,

	loading: state.product.loading,

	catergories: state.catergories.catergories,
});

export default connect(mapStateToProps, {
	createProduct,
	getSubCategories,
	setAlert,
	getProduct,
	createPlug,
	updateProduct,
})(withRouter(PlugApplication));
