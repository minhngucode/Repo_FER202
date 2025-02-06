import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa"; // Import icon người dùng

const BookingTicket = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        from: "Hà Nội",
        to: "Hà Nội",
        roundTrip: [],
    });

    // Xử lý thay đổi dữ liệu form
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                roundTrip: checked
                    ? [...prevData.roundTrip, value]
                    : prevData.roundTrip.filter((item) => item !== value),
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    // Xử lý khi submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dữ liệu đặt vé:\n${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <div className="container mt-4">
            {/* Tiêu đề */}
            <div className="alert alert-primary text-center">
                <h2>✈️ Form đặt vé máy bay</h2>
            </div>

            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
                
                {/* Họ tên */}
                <div className="form-group mb-3">
                    <label className="form-label">Họ tên</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaUser />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Họ tên"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <span className="input-group-text">vnd</span>
                    </div>
                    <small className="form-text text-muted">Phải nhập 5 ký tự, in hoa...</small>
                </div>

                {/* Địa chỉ */}
                <div className="form-group mb-3">
                    <label className="form-label">Địa chỉ</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="Nhập địa chỉ..."
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <small className="form-text text-muted">Phải nhập 5 ký tự, in hoa...</small>
                </div>

                {/* Đi từ - Đến */}
                <div className="row mb-3">
                    <div className="col form-group">
                        <label className="form-label">Đi từ</label>
                        <select className="form-select" name="from" value={formData.from} onChange={handleChange}>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                            <option value="Nha Trang">Nha Trang</option>
                        </select>
                    </div>
                    <div className="col form-group">
                        <label className="form-label">Đến</label>
                        <select className="form-select" name="to" value={formData.to} onChange={handleChange}>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                            <option value="Nha Trang">Nha Trang</option>
                        </select>
                    </div>
                </div>

                {/* Chọn chiều đi (Khứ hồi) */}
                <div className="form-group mb-3">
                    <label className="form-label">Chọn chiều đi (Khứ hồi)</label>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="roundTrip"
                            value="Đi"
                            checked={formData.roundTrip.includes("Đi")}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Đi</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="roundTrip"
                            value="Về"
                            checked={formData.roundTrip.includes("Về")}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">Về</label>
                    </div>
                </div>

                {/* Nút Đặt vé */}
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary w-100">Đặt vé</button>
                </div>
            </form>

            {/* Hiển thị dữ liệu theo thời gian thực */}
            <div className="mt-4">
                <h4>Kết quả nhập:</h4>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </div>
    );
};

export default BookingTicket;
