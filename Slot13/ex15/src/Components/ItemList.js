import React, { useReducer, useState } from 'react';
import { Container, Row, Col, Button, Form, ListGroup, InputGroup, FormControl, Card } from 'react-bootstrap';
const initialState = {
  items: [],
};
function listReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.item] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.id) };
    case 'EDIT_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.item.id ? { ...item, name: action.item.name } : item
        ),
      };
    case 'SET_ITEMS':
      return { ...state, items: action.items };
    default:
      return state;
  }
}
function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState('');
  const [filterText, setFilterText] = useState('');
  const [editItemId, setEditItemId] = useState(null);
  const [editText, setEditText] = useState('');
  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      const newItem = { id: Date.now(), name: newItemName.trim(), createdAt: Date.now() };
      dispatch({ type: 'ADD_ITEM', item: newItem });
      setNewItemName('');
    }
  };
  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };
  const handleEditItem = (item) => {
    setEditItemId(item.id);
    setEditText(item.name);
  };
  const handleSaveEdit = (id) => {
    dispatch({ type: 'EDIT_ITEM', item: { id, name: editText } });
    setEditItemId(null);
    setEditText('');
  };
  const handleSortAlphabetical = () => {
    const sortedItems = [...state.items].sort((a, b) => a.name.localeCompare(b.name));
    dispatch({ type: 'SET_ITEMS', items: sortedItems });
  };
  const handleSortByTime = () => {
    const sortedItems = [...state.items].sort((a, b) => a.createdAt - b.createdAt);
    dispatch({ type: 'SET_ITEMS', items: sortedItems });
  };
  const filteredItems = state.items.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <Container fluid className="App">
      <Card className="list-card">
        <h2 className="list-title">Item List</h2>
        <Form>
          <Row className="align-items-center">
            <Col md={6}>
              <Form.Group controlId="formItem">
                <Form.Label className="form-label">Enter Item:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter item name"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  className="form-control"/>
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button variant="primary" onClick={handleAddItem} className="mt-2">
                Add Item
              </Button>
            </Col>
            <Col md={4}>
              <InputGroup className="mt-2">
                <FormControl
                  placeholder="Filter items..."
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  className="form-control"/>
              </InputGroup>
            </Col>
          </Row>
        </Form>
        <div className="mt-3">
          <Button variant="secondary" onClick={handleSortAlphabetical} className="me-2">
            Sort Alphabetical
          </Button>
          <Button variant="secondary" onClick={handleSortByTime}>
            Sort by Time
          </Button>
        </div>
        <ListGroup className="mt-3">
          {filteredItems.map(item => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
              {editItemId === item.id ? (
                <>
                  <Form.Control
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="form-control"/>
                  <div>
                    <Button variant="success" size="sm" onClick={() => handleSaveEdit(item.id)} className="me-2">
                      Save
                    </Button>
                    <Button variant="warning" size="sm" onClick={() => setEditItemId(null)}>
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <span>{item.name}</span>
                  <div>
                    <Button variant="info" size="sm" onClick={() => handleEditItem(item)} className="me-2">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item.id)}>
                      Remove
                    </Button>
                  </div>
                </>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
}
export default ItemList;