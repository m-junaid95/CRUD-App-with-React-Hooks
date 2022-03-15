import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th style={{ color: "white" }}>Name</th>
        <th style={{ color: "white" }}>Username</th>
        <th style={{ color: "white" }}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td style={{ color: "orange" }}>{user.name}</td>
            <td style={{ color: "orange" }}>{user.username}</td>
            <td>
              <button  style={{ color: "blue"}}
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button  style={{ color: "red" }}
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td  style={{ color: "darkgrey" }}colSpan={3}>No users yet</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
