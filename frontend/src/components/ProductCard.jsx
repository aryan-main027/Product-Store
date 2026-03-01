import { Box , Button, Heading, HStack, IconButton, Image , Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text , useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from '../store/product';
import { useState , useEffect } from 'react';

function ProductCard({product}) {

  const [updatedProduct , setUpdatedProduct] = useState(product)
  useEffect(() => {
  setUpdatedProduct(product);
  }, [product]);

  const textColor = useColorModeValue("gray.600","gray.200");
  const bg = useColorModeValue("white","gray.800");

  const { isOpen , onClose , onOpen} = useDisclosure();

  const { deleteProducts , updateProduct } = useProductStore();
  const toast = useToast();

  const handleDeleteProduct = async (pid) => {
    const {success , message} = await deleteProducts(pid);
    if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
  }

  const handleUpdateProduct = async (pid,updatedProduct) => {
    const {success,message} = await updateProduct(pid,updatedProduct);
    onClose();
    if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product Updated Successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
  }
  return (
    <>
      <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
      >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

        <Box>
          <Heading as='h3' size='md' mt={2} mb={2} px={2}>
            {product.name}
          </Heading>
          <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4} px={2}>
					  ₹{product.price}
				  </Text>
          <HStack>
            <IconButton icon={<EditIcon />} onClick={onOpen}  colorScheme='blue' ml={2} mb={4}/>
            <IconButton
						icon={<DeleteIcon />}
						colorScheme='red'
					  ml={2} mb={4}
            onClick={() => handleDeleteProduct(product._id)}
            />
          </HStack>
        </Box>
        {/* Use to Create a small pop up */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>

          <ModalContent>
            <ModalHeader>
              Update Product
            </ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <VStack spacing={4} mb={4} >
                <Input
                  placeholder='Product Name'
                  name='name'
                  value={updatedProduct.name}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                />
                <Input
                  placeholder='Price'
                  name='price'
                  type='number'
                  value={updatedProduct.price}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                />
                <Input
                  placeholder='Image URL'
                  name='image'
                  value={updatedProduct.image}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                />
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme='blue'
                mr={3}
                onClick={() => handleUpdateProduct(product._id, updatedProduct)} 
						  >
							  Update
						  </Button>
              <Button variant='ghost' onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>  
      </Box>
    </>
  )
}

export default ProductCard