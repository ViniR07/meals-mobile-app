import React, { useCallback, useEffect, useReducer, useRef } from "react";
import { useSpring, animated } from "react-spring";
import icons from "../../assets";
import { IconBox, IconDiv } from "../Meal/styles";
import { BotaoSecundario, Icon } from "../UI";
import * as S from "./style";

const Modal = ({
	showModal,
	toggle,
	titulo,
	descricao,
	localizacao,
	categoria,
	srcImagem,
}) => {
	const modalRef = useRef();
	const [showMore, toggleShowMore] = useReducer((state) => !state, false);

	const animation = useSpring({
		config: {
			duration: 200,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateX(0%)` : `translateX(-100%)`,
	});

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			toggle(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				toggle(false);
			}
		},
		[toggle, showModal]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.addEventListener("keydown", keyPress);
	}, [keyPress]);

	console.log(showMore);
	return (
		<>
			{showModal ? (
				<S.Background ref={modalRef} onClick={closeModal}>
					<animated.div style={animation}>
						<S.ModalContainer>
							<S.CloseButton
								src={icons.remove}
								onClick={toggle}
							/>
							<S.ModalHeader>
								<S.ModalImg src={srcImagem} alt={titulo} />
							</S.ModalHeader>
							<S.ModalMain>
								<S.ModalTitle>{titulo}</S.ModalTitle>
								<IconDiv>
									<IconBox>
										<Icon src={icons.localizacao} />
										<span style={{'marginLeft': '5px'}}>{categoria}</span>
									</IconBox>
									<IconBox>
										<Icon style={{'marginLeft': '15px'}} src={icons.talheres} />
										<span style={{'marginLeft': '5px'}}>{localizacao}</span>
									</IconBox>
								</IconDiv>
								<S.ModalDescription>
									{showMore
										? descricao
										: descricao.substring(0, 150) + "..."}
								</S.ModalDescription>
								<BotaoSecundario onClick={toggleShowMore}>
									<span className="span">
										{showMore ? "Show less" : "Show More"}
									</span>
								</BotaoSecundario>
							</S.ModalMain>
						</S.ModalContainer>
					</animated.div>
				</S.Background>
			) : null}
		</>
	);
};

export default Modal;
