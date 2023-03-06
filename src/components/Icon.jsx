import React, { Component } from 'react'
import { BiShow, BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft, MdModeEditOutline, MdDeleteForever, MdCheckCircle, MdCancel} from 'react-icons/md'
import { FiCircle } from "react-icons/fi";

class Icon extends Component {
    components = {
        BiLeftArrow : BiLeftArrow,
        BiRightArrow : BiRightArrow,
        BiShow : BiShow,
        MdKeyboardArrowRight: MdKeyboardArrowRight,
        MdKeyboardArrowLeft: MdKeyboardArrowLeft,
        MdModeEditOutline : MdModeEditOutline,
        MdDeleteForever : MdDeleteForever,
        MdCheckCircle : MdCheckCircle,
        MdCancel: MdCancel,
        FiCircle : FiCircle,
    }

    render() {
        const Icon = this.components[this.props.name]
        return <Icon size={this.props.size} {...this.props}/>
    }
}

export default Icon