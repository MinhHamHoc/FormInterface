import React, { Component } from 'react'

export default class TenUser extends Component {

    renderUserForm = () => {
        interface UsersInterface {
            id: number,
            FirstName: String,
            LastName: String,
            Gender: String,
            BirthDay: String,
            Address: {
                province: String,
                city: String,
                address: String
            },
            Phone: String,
            Email: String,
            Active: String,
            created_at: String,
            updated_at: String,
            deleted_at: String
        }
        const mangNguoiDung: UsersInterface[] = [
            {
                id: 1,
                FirstName: "Văn A",
                LastName: "Nguyễn",
                Gender: "Nam",
                BirthDay: "1/1/2021",
                Address: {
                    province: "Hà Nội",
                    city: "TP Hà nội",
                    address: "Lê Thanh Nghị"
                },
                Phone: "012345678",
                Email: "NguyenvanA@gmail.com",
                Active: "Hihi",
                created_at: "12:00:00",
                updated_at: "12:00:00",
                deleted_at: "None"
            },
            {
                id: 2,
                FirstName: "Văn B",
                LastName: "Nguyễn",
                Gender: "Nam",
                BirthDay: "1/1/2021",
                Address: {
                    province: "Hà Nội",
                    city: "TP Hà nội",
                    address: "Trần Đại Nghĩa"
                },
                Phone: "012345678",
                Email: "NguyenvanB@gmail.com",
                Active: "Hihi",
                created_at: "12:00:00",
                updated_at: "12:00:00",
                deleted_at: "None"
            },
            {
                id: 3,
                FirstName: "Thị C",
                LastName: "Nguyễn",
                Gender: "Nữ",
                BirthDay: "1/1/2021",
                Address: {
                    province: "Hà Nội",
                    city: "TP Hà nội",
                    address: "Giải Phóng"
                },
                Phone: "012345678",
                Email: "NguyenthiC@gmail.com",
                Active: "Hihi",
                created_at: "12:00:00",
                updated_at: "12:00:00",
                deleted_at: "None"
            },
            {
                id: 4,
                FirstName: "Văn D",
                LastName: "Nguyễn",
                Gender: "Nam",
                BirthDay: "1/1/2021",
                Address: {
                    province: "Hà Nội",
                    city: "TP Hà nội",
                    address: "Nguyễn Trãi"
                },
                Phone: "012345678",
                Email: "NguyenvanD@gmail.com",
                Active: "Hihi",
                created_at: "12:00:00",
                updated_at: "12:00:00",
                deleted_at: "None"
            },
            {
                id: 5,
                FirstName: "Thị E",
                LastName: "Nguyễn",
                Gender: "Nữ",
                BirthDay: "1/1/2021",
                Address: {
                    province: "Hà Nội",
                    city: "TP Hà nội",
                    address: "Cầu Giấy"
                },
                Phone: "012345678",
                Email: "NguyenthiE@gmail.com",
                Active: "Hihi",
                created_at: "12:00:00",
                updated_at: "12:00:00",
                deleted_at: "None"
            },
            {
                id: 6,
                FirstName: "Văn F",
                LastName: "Nguyễn",
                Gender: "Nam",
                BirthDay: "1/1/2021",
                Address: {
                    province: "Hà Nội",
                    city: "TP Hà nội",
                    address: "Ngã Tư Sở"
                },
                Phone: "012345678",
                Email: "NguyenvanF@gmail.com",
                Active: "Hihi",
                created_at: "12:00:00",
                updated_at: "12:00:00",
                deleted_at: "None"
            },
            {
                id: 7,
                FirstName: "Văn G",
                LastName: "Nguyễn",
                Gender: "Nam",
                BirthDay: "1/1/2021",
                Address: {
                    province: "Hà Nội",
                    city: "TP Hà nội",
                    address: "Trần Duy Hưng"
                },
                Phone: "012345678",
                Email: "NguyenvanG@gmail.com",
                Active: "Hihi",
                created_at: "12:00:00",
                updated_at: "12:00:00",
                deleted_at: "None"
            },
            {
                id: 8,
                FirstName: "Thị H",
                LastName: "Nguyễn",
                Gender: "Nữ",
                BirthDay: "1/1/2021",
                Address: {
                    province: "Hà Nội",
                    city: "TP Hà nội",
                    address: "Thanh Nhàn"
                },
                Phone: "012345678",
                Email: "NguyenthiH@gmail.com",
                Active: "Hihi",
                created_at: "12:00:00",
                updated_at: "12:00:00",
                deleted_at: "None"
            },
            {
                id: 9,
                FirstName: "Văn I",
                LastName: "Nguyễn",
                Gender: "Nam",
                BirthDay: "1/1/2021",
                Address: {
                    province: "Hà Nội",
                    city: "TP Hà nội",
                    address: "Hoàng Hoa Thám"
                },
                Phone: "012345678",
                Email: "NguyenvanI@gmail.com",
                Active: "Hihi",
                created_at: "12:00:00",
                updated_at: "12:00:00",
                deleted_at: "None"
            },
            {
                id: 10,
                FirstName: "Thị J",
                LastName: "Nguyễn",
                Gender: "Nữ",
                BirthDay: "1/1/2021",
                Address: {
                    province: "Hà Nội",
                    city: "TP Hà nội",
                    address: "Trần Hưng Đạo"
                },
                Phone: "012345678",
                Email: "NguyenthiJ@gmail.com",
                Active: "Hihi",
                created_at: "12:00:00",
                updated_at: "12:00:00",
                deleted_at: "None"
            },
        ]
        return mangNguoiDung.map((users, index) => {
            return (
                <tbody key={index}>
                    <tr>
                        <th scope="row">{users.id}</th>
                        <td>{users.FirstName}</td>
                        <td>{users.LastName}</td>
                        <td>{users.Gender}</td>
                        <td>{users.BirthDay}</td>
                        <td>
                            <div className="dropdown">
                                <button onClick={() => {
                                    alert(`
                                    *****Thông tin địa chỉ người dùng*****
                                    Province: ${users.Address.province}
                                    City: ${users.Address.city}
                                    Address: ${users.Address.address}
                                    `)
                                }} className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                    Address
                                </button>
                            </div>
                        </td>
                        <td>{users.Phone}</td>
                        <td>{users.Email}</td>
                        <td>{users.Active}</td>
                        <td>{users.created_at}</td>
                        <td>{Date.now()}</td>
                        <td>{users.deleted_at}</td>
                    </tr>

                </tbody>
            )

        })
    }

    render() {

        return (
            <div className='container mt-3'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Gender</th>
                            <th scope="col">BirthDay</th>
                            <th scope="col">Adress</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Active</th>
                            <th scope="col">Created</th>
                            <th scope="col">Updated</th>
                            <th scope="col">Deleted</th>
                        </tr>
                    </thead>
                    {this.renderUserForm()}
                </table>
            </div>
        )
    }
}
