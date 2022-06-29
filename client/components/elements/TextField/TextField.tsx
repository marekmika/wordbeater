import React, { memo, useCallback, FC } from 'react'
import {
  TextField as TextFieldMaterialUI,
  makeStyles,
  createStyles,
} from '@material-ui/core'
import styled from 'styled-components'
import theme from '@styles/theme'

interface TextFieldProps {
  handleChange: (value: string) => Promise<void>
  value?: string
}

const StyledTextField = styled(TextFieldMaterialUI)`
  width: clamp(10rem, 50%, 20rem);
`

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: `${theme.colors.white}`,
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          border: '0',
        },
        '&.Mui-focused fieldset': {
          border: '0',
        },
      },
    },
    resize: {
      color: `${theme.colors.black}`,
      fontSize: '2rem',
      textAlign: 'center',
    },
  })
)

const TextField: FC<TextFieldProps> = memo<TextFieldProps>(
  ({ handleChange, value }: TextFieldProps) => {
    const classes = useStyles()

    return (
      <StyledTextField
        variant="outlined"
        onChange={(event) => handleChange(event.target.value)}
        value={value}
        classes={{
          root: classes.root,
        }}
        InputProps={{
          classes: {
            input: classes.resize,
          },
        }}
        autoFocus
      />
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
