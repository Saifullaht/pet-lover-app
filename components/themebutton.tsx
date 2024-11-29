import { types } from "@babel/core";
import React, { ReactNode } from "react";
import { TouchableOpacity , type TouchableOpacityProps , StyleSheet} from "react-native";
import { ThemedText } from "./ThemedText";


export type themebuttonprops = TouchableOpacityProps & {
    bgColor? : string;
    txtColor? : string;
    txt? : string;
    my?: number;
    mx?: number;
    icon? : ReactNode;
     
     
}

export const Themebutton = ({ bgColor,
    txtColor,
    txt = "Button",
    mx=0,
    style,
    my=0,
    icon,
     
    ...rest

     } : themebuttonprops)=>{
        return(
            <TouchableOpacity  
             style={[styles.btncontainer , bgColor &&  {backgroundColor: bgColor}
                , mx?{marginHorizontal:mx} : undefined
                , my?{marginHorizontal:my} : undefined,style,]}
                {...rest}>

                    {icon && icon}
            <ThemedText style={{color : txtColor? txtColor:"white"}}>{txt}</ThemedText>
            </TouchableOpacity>
        ) 
    }
    const styles = StyleSheet.create({
        btncontainer:{
            height:50,
            flexDirection:"row",
            marginHorizontal: 20,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"blue",
            borderRadius:12,
            gap:10

        }
    })