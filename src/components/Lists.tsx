import {
  Stack,
  SimpleGrid,
  GridItem,
  Checkbox,
  CheckboxGroup,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import axios from "axios";
import { useWallet } from "@/context/WalletContext";
import { isAddress } from "viem";
import { useCheckbox } from "@/context/CheckboxContext";

export const Lists = () => {
  const [checkedItems1, setCheckedItems1] = React.useState([false, false, false, false, false]);
  const [checkedItems2, setCheckedItems2] = React.useState([false, false, false, false, false, false]);
  const [checkedItems, setCheckedItems] = React.useState([false, false, false, false, false]);
  const { walletAddress } = useWallet();

  const { checkedItem, setCheckedItem, checkedItem2, setCheckedItem2, checkedItem3, setCheckedItem3, checkedItem4, setCheckedItem4, checkedItem5, setCheckedItem5, checkedItem6, setCheckedItem6, checkedItem7, setCheckedItem7, checkedItem8, setCheckedItem8, checkedItem9, setCheckedItem9, checkedItem10, setCheckedItem10 } = useCheckbox();

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const bg = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");

  useEffect(() => {
    if (checkedItems[0] && walletAddress && isAddress(walletAddress)) {
      const fetchNFTs = async () => {
        try {
          const response = await axios.get(`https://api.opensea.io/api/v2/chain/sepolia/account/${walletAddress}/nfts`);
          console.log("NFT Data: ", response.data);
        } catch (error) {
          console.error("Error fetching NFT data: ", error);
        }
      };

      fetchNFTs();
    }
  }, [checkedItems[0], walletAddress]);

  

  return (
    <Box p={6} bg={bg}>
      <SimpleGrid
        as="form"
        w={{ base: "full", md: 7 / 12 }}
        columns={{ base: 1, lg: 6 }}
        spacing={6}
        pt={4}
        mx="auto"
        mb={8}
      >
        {/* Proof of Personhood Section */}
        <GridItem colSpan={{ base: "auto", lg: 2 }}>
          <Text fontSize="lg" fontWeight="bold" mb={2} color={textColor}>
            Proof of Personhood
          </Text>
          <Stack pl={6} mt={1} spacing={3}>
            <CheckboxGroup
              defaultValue={["worldid", "brightid"]}
              onChange={(selected) => console.log(selected)}
            >
              <Checkbox
                isChecked={checkedItem}
                onChange={(e) => setCheckedItem(e.target.checked)}
              >
                Gitcoin Passport
              </Checkbox>
              <Checkbox
                isChecked={checkedItems1[1]}
                onChange={(e) => setCheckedItems1([checkedItems1[0], e.target.checked, ...checkedItems1.slice(2)])}
              >
                WorldCoin ID
              </Checkbox>
              <Checkbox
                isChecked={checkedItems1[2]}
                onChange={(e) => {
                  setCheckedItem2(e.target.checked)
                  setCheckedItems1([checkedItems1[0], checkedItems1[1], e.target.checked, ...checkedItems1.slice(3)])}
                }
              >
                Binance BABT
              </Checkbox>
              <Checkbox
                isChecked={checkedItems1[3]}
                onChange={(e) => {
                  setCheckedItem3(e.target.checked)
                  setCheckedItems1([checkedItems1[0], checkedItems1[1], checkedItems1[2], e.target.checked, ...checkedItems1.slice(4)])
                }}
              >
                Coinbase KYC
              </Checkbox>
            </CheckboxGroup>
          </Stack>
        </GridItem>

        {/* Blockchain & Crypto Networks Section */}
        <GridItem colSpan={{ base: "auto", lg: 2 }}>
          <Text fontSize="lg" fontWeight="bold" mb={2} color={textColor}>
            Blockchain & Crypto Networks
          </Text>
          <Stack pl={6} mt={1} spacing={3}>
            <Checkbox
              isChecked={checkedItems2[0]}
              onChange={(e) => {
                setCheckedItem5(e.target.checked)
                setCheckedItems2([e.target.checked, ...checkedItems2.slice(1)])

              }}
            >
              Current ETH balance
            </Checkbox>
            <Checkbox
            isChecked={checkedItems2[1]}
            onChange={(e) => {
              setCheckedItem6(e.target.checked)
              setCheckedItems2([checkedItems2[0], e.target.checked, checkedItems2[2], checkedItems2[3], ...checkedItems2.slice(4)])}
            }

            >
              100 transactions
            </Checkbox>
            <Checkbox
              isChecked={checkedItems2[2]}
              onChange={(e) => {
                setCheckedItem7(e.target.checked)
                setCheckedItems2([checkedItems2[0], checkedItems2[1], e.target.checked, checkedItems2[3], ...checkedItems2.slice(4)])}
              }
            >
              1000 days old transactions
            </Checkbox>
            <Checkbox
              isChecked={checkedItems2[3]}
              onChange={(e) => setCheckedItems2([checkedItems2[0], checkedItems2[1], checkedItems2[2], e.target.checked, ...checkedItems2.slice(4)])}
              >
              0.25 ETH on gas
            </Checkbox>

          </Stack>
        </GridItem>

        {/* My Circle Section */}
        <GridItem colSpan={{ base: "auto", lg: 2 }}>
          <Text fontSize="lg" fontWeight="bold" mb={2} color={textColor}>
            My Circle
          </Text>
          <Checkbox
            disabled={true}
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) =>{
              setCheckedItems([
                e.target.checked,
                e.target.checked,
                e.target.checked,
                e.target.checked,
                e.target.checked,
              ])
            }
            }
          >
            Select All
          </Checkbox>
          <Stack pl={6} mt={1} spacing={3}>
            <Checkbox
              disabled={true}
              isChecked={checkedItems[1]}
              onChange={(e) =>
                setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], checkedItems[3], checkedItems[4]])
              }
            >
              CryptoPunks
            </Checkbox>
            <Checkbox
              disabled={true}
              isChecked={checkedItems[2]}
              onChange={(e) =>
                setCheckedItems([checkedItems[0], checkedItems[1], e.target.checked, checkedItems[3], checkedItems[4]])
              }
            >
              BAYC
            </Checkbox>
            <Checkbox
              disabled={true}
              isChecked={checkedItems[3]}
              onChange={(e) =>
                setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], e.target.checked, checkedItems[4]])
              }
            >
              Nouns
            </Checkbox>
            <Checkbox
              disabled={true}
              isChecked={checkedItems[4]}
              onChange={(e) =>
                setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], checkedItems[3], e.target.checked])
              }
            >
              ENS
            </Checkbox>
            <Checkbox
              disabled={true}
              isChecked={checkedItems[4]}
              onChange={(e) =>
                setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], checkedItems[3], e.target.checked])
              }
            >
              Lens
            </Checkbox>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
