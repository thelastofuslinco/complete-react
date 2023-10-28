import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import crypto from 'crypto'
import { BookModel } from '../../models/BookModel'

interface State {
  data: Array<BookModel>
}

const initialState: State = {
  data: []
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookModel>) => {
      state.data.push({
        ...action.payload,
        id: crypto.randomBytes(20).toString('hex')
      })
    },
    removeBook: (state, action: PayloadAction<string>) => {
      const bookIndex = state.data.findIndex(
        (book) => book.id === action.payload
      )
      state.data.splice(bookIndex, 1)
    }
  }
})

export const { addBook } = booksSlice.actions

export default booksSlice.reducer
