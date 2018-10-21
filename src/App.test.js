import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App, { Search, Button, Table } from './App'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<App />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
	
	test('has a valid snapshot', () => {
		const component = renderer.create(
			<App />
		)

		const tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})

})

describe('Search', () => {

	const props = {
		value: 'react/redux',
		onChange(){},
		onSubmit(){},
	}

	it('renders without crashing', () => {
		const div = document.createElement('div')
	  	ReactDOM.render(<Search { ...props }>Search</Search>, div)
	  	ReactDOM.unmountComponentAtNode(div)
	})
  
	test('has a valid snapshot', () => {
	  	const component = renderer.create(
			<Search { ...props }>Search</Search>
	  	)
		  
		const tree = component.toJSON()
	  	expect(tree).toMatchSnapshot()
	})
  
})

describe('Button', () => {
	const props = {
		className: 'button-inline',
		onClick() {},
	}

	it('renders without crashing', () => {
		const div = document.createElement('div')
	  	ReactDOM.render(<Button>Give Me More</Button>, div)
	  	ReactDOM.unmountComponentAtNode(div)
	})
  
	test('has a valid snapshot', () => {
	  	const component = renderer.create(
			<Button>Give Me More</Button>
	  	)
		  
		const tree = component.toJSON()
	  	expect(tree).toMatchSnapshot()
	})

	it('shows one item in list', () => {
		const element = shallow(
			<Button { ...props }>Give Me More</Button>
		)
	
		expect(element.find('.button-inline').length).toBe(1)
	})
  
})

describe('Table', () => {

	const props = {
	  	list: [
			{ title: '1', author: '1', num_comments: 1, points: 2, objectID: '1' },
			{ title: '2', author: '2', num_comments: 1, points: 2, objectID: '2' },
		  ],
		  onDismiss(){},
		  sortKey: 'TITLE',
		  isSortReverse: false,
	}
  
	it('renders without crashing', () => {
		const div = document.createElement('div')
	  	ReactDOM.render(<Table { ...props } />, div)
	})
  
	test('has a valid snapshot', () => {
	  	const component = renderer.create(
			<Table { ...props } />
	  	)
	  
		const tree = component.toJSON()
	  	expect(tree).toMatchSnapshot()
	})

	it('shows two items in list', () => {
		const element = shallow(
			<Table { ...props } />
		)
	
		expect(element.find('.table-row').length).toBe(2)

	})

})