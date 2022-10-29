import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  LeftContainer,
  FormWrapper,
  Box,
  ImageContainer,
  StyledImg,
  FormTitle,
  StyledLink,
} from "./styles";
import CreateFormImage from "./../../assets/image9.png";
import Input from "../../components/Input/Input";
import TextArea from "../../components/Input/TextArea";
import StyledButton from "./../../components/Button/Index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LeftArrow from "../../assets/LeftArrow";
import axios from "axios";
import { toast } from "react-toastify";
import FullScrennLoader from "./../../components/FullScreenLoader/Index";

const UrlRegex = new RegExp(
  /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
);

const schema = yup.object({
  itemName: yup.string().trim().required().min(5, "at least 5 characters"),
  link: yup.string().trim().required().matches(UrlRegex, "Enter Valid URL"),
  resourceName: yup.string().trim().required().min(5, "at least 5 characters"),
  description: yup.string().trim().required().min(15, "at least 15 characters"),
});

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const submitRef = useRef();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.get("https://media-content.ccbp.in/website/react-assignment/add_resource.json");
      reset({
        itemName: '',
        description: '',
        link: '',
        resourceName: ''
      })
      toast.success("Create Item Success");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (submitRef) {
      submitRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
      });
    }
  }, [submitRef]);
  return (
    <Box>
      {loading && <FullScrennLoader />}
      <LeftContainer>
        <StyledLink as={Link} to="/">
          <LeftArrow />
          <span style={{ marginLeft: "9px" }}>User</span>
        </StyledLink>
        <FormWrapper>
          <FormTitle>Item Details</FormTitle>
          <Input
            error={errors?.itemName}
            errorMessage={errors?.itemName?.message}
            inputProps={{ ...register("itemName") }}
            label="item name"
          />
          <Input
            link={true}
            error={errors?.link}
            errorMessage={errors?.link?.message}
            inputProps={{ ...register("link") }}
            marginTop="24px"
            label="Link"
          />
          <Input
            error={errors?.resourceName}
            errorMessage={errors?.resourceName?.message}
            inputProps={{ ...register("resourceName") }}
            marginTop="24px"
            label="Resource Name"
          />
          <TextArea
            error={errors?.description}
            errorMessage={errors?.description?.message}
            textAreaProps={{ ...register("description") }}
            marginTop="24px"
            label="description"
          />
          <StyledButton
            ref={submitRef}
            style={{ marginTop: "40px" }}
            onClick={handleSubmit(onSubmit)}
            text="Create"
          />
        </FormWrapper>
      </LeftContainer>
      <ImageContainer>
        <StyledImg src={CreateFormImage} alt="person doint work" />
      </ImageContainer>
    </Box>
  );
};

export default Index;
