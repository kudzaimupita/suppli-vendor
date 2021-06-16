import React, { PureComponent } from "react";
import axios from "axios";
import { createPlug } from "../actions/plugs";
import { createProduct } from "../actions/products";
import { getSubCategories } from "../actions/subCatergories";
import { Upload, message, Select as AntSelect } from "antd";
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
	Input,
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

const { Option } = Select;

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
	}
	toggleModal = (state) => {
		this.setState({
			[state]: !this.state[state],
		});
	};
	state = {
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
		//     if (this.state.quickPoints.length < 5)
		//       return this.props.setAlert(
		//         "Please add 5 key features of your product",
		//         "danger"
		//       );
		// if (this.state.fileList.length < 1)
		// 	return this.props.setAlert(
		// 		"Please add atleast 1 image of the product",
		// 		"danger"
		// 	);
		const data = new FormData();
		const img = this.state.filelist[0]?.originFileObj;
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

	render() {
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
		return (
			<>
				<Card className="bg-white shadow" style={{ marginBottom: 20 }}>
					{" "}
					<CardHeader className="bg-secondary border-0">
						<Row className="align-items-center">
							<Col xs="8">
								<h3 className="mb-0">Add product</h3>
							</Col>
							<Col className="text-right" xs="4">
								<Link to="/admin/products">
									{" "}
									<Button color="primary" href="#pablo" size="sm">
										See all products
									</Button>
								</Link>
							</Col>
						</Row>
					</CardHeader>
					<hr style={{ marginTop: "0", marginBottom: "10px" }}></hr>
					<Container>
						<Form enctype="multipart/form-data">
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
											size="sm"
											className="form-control"
											id="input-username"
											placeholder="eg Russell Hobbs fruit blender "
											type="text"
											name="name"
											value={this.state.name}
											onChange={this.handleNameChange}
										/>
									</FormGroup>
								</Col>
								<Col lg="6">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Brand name<span className="text-danger"> *</span>
										</label>
										<Input
											size="sm"
											className="form-control"
											id="input-email"
											placeholder="eg Russell Hobbs"
											type="text"
											name="brandName"
											value={this.state.brandName}
											onChange={this.handleBrandNameChange}
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
											size="sm"
											htmlFor="example-number-input"
											className="form-control"
											id="input-first-name"
											placeholder="eg 2999 no decimals"
											type="number"
											name="price"
											required
											value={this.state.price}
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
											size="sm"
											htmlFor="example-number-input"
											className="form-control"
											placeholder="eg 53 no decimals"
											type="number"
											name="quantityInStock"
											value={this.state.quantityInStock}
											onChange={this.handleQuantityInStockChange}
										/>
									</FormGroup>
								</Col>

								<Col sm="12" lg="6">
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
											value={this.state.multipleSelect}
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
										Gender<span className="text-danger"> </span>
									</label>{" "}
									<Select
										size="sm"
										className="react-select react-select-primary"
										classNamePrefix="react-select"
										name="singleSelect"
										defaultValue={this.state.singleSelect}
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
											size="sm"
											style={{ height: "140px" }}
											className="form-control"
											id="input-address"
											placeholder="Stainless Steel Removable Blade - This blade lets you experience 15% smoother blending ......etc "
											type="textarea"
											name="description"
											value={this.state.reactQuillText}
											onChange={this.handleReactQuillChange}
										/>
									</FormGroup>
								</Col>{" "}
								{/* <Col lg="4" style={{ paddingTop: 0 }}>
                 <FormGroup>
                   <label
                     className="labels"
                     htmlFor="input-country"
                     style={{ fontSize: "13px" }}
                   >
                     Colors available
                   </label>

                   <TagsInput
                     value={this.state.colors}
                     onChange={this.handleColorsChange}
                     tagProps={{ className: "react-tagsinput-tag info" }}
                   />
                 </FormGroup>
               </Col> */}
								<Col xl="3" md="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Upload cover image<span className="text-danger"> *</span>
										</label>
										<ImgCrop rotate>
											<Upload
												action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
												listType="picture-card"
												fileList={this.state.filelist}
												onChange={this.onChange}
												onPreview={onPreview}
											>
												{this.state.filelist.length < 1 && "+ Upload"}
											</Upload>
										</ImgCrop>
										{/* <Upload
											name="avatar"
											listType="picture-card"
											className="avatar-uploader"
											showUploadList={false}
											action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
											beforeUpload={this.beforeUpload}
											onChange={this.handleCoverChange}
										>
											{imageUrl ? (
												<img
													src={imageUrl}
													alt="avatar"
													style={{ width: "100%" }}
												/>
											) : (
												uploadButton
											)}
										</Upload> */}
									</FormGroup>
								</Col>
								{/* <Col xl="9" md="8">
									<label
										className="labels"
										htmlFor="input-country"
										style={{ fontSize: "13px" }}
									>
										Upload product images<span className="text-danger"> *</span>
										8 max
									</label>

									<Upload
										action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
										listType="picture-card"
										fileList={fileList}
										onPreview={this.handlePreview}
										onChange={this.handleChange}
									>
										{fileList.length >= 8 ? null : uploadButton}
									</Upload>
									<Modal
										visible={previewVisible}
										title={previewTitle}
										footer={null}
										onCancel={this.handleCancel}
									>
										<img
											alt="example"
											style={{ width: "100%" }}
											src={previewImage}
										/>
									</Modal>
								</Col> */}
								<Col
									lg="4
               "
									style={{ paddingTop: 0 }}
								>
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Tags
										</label>

										<TagsInput
											placeholder="Add tags"
											value={this.state.tags}
											onChange={this.handleTagsChange}
											tagProps={{ className: "react-tagsinput-tag info" }}
										/>
									</FormGroup>
								</Col>
								<Col lg="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Add key features<span className="text-danger"> *</span>
										</label>

										<TagsInput
											// disabled={this.state.quickPoints.length>6?false:true}
											value={this.state.quickPoints}
											onChange={this.handleQuickPointsChange}
											tagProps={{ className: "react-tagsinput-tag info" }}
											placeholder="Add a tahhg"
										/>
										{/* <label className="labels" style={{ fontSize: "13px" }}>
											Sizes available
										</label>
										<TagsInput
											value={this.state.sizes}
											onChange={this.handleSizesChange}
											tagProps={{ className: "react-tagsinput-tag info" }}
										/> */}
									</FormGroup>
								</Col>{" "}
								{/* <Col lg="4">
									<FormGroup>
										<label
											className="labels"
											htmlFor="input-country"
											style={{ fontSize: "13px" }}
										>
											Add 5 key features<span className="text-danger"> *</span>
										</label>

										<TagsInput
											// disabled={this.state.quickPoints.length>6?false:true}
											value={this.state.quickPoints}
											onChange={this.handleQuickPointsChange}
											tagProps={{ className: "react-tagsinput-tag info" }}
											placeholder="Add a tahhg"
										/>
									</FormGroup>
								</Col> */}
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
								Create product
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
};

const mapStateToProps = (state) => ({
	auth: state.auth.isAuthenticated,
	isAuthenticated: state.auth,
	loading: state.auth.loading,
	createdPlugLoading: state.createdPlug.loading,
	subCatergories: state.subCatergories.subCatergories,
});

export default connect(mapStateToProps, {
	createProduct,
	getSubCategories,
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
