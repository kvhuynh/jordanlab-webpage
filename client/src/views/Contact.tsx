import { Box, Flex, Link, Text } from "@chakra-ui/react";

export const Contact: React.FC = () => {
  const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <Box paddingTop={75} paddingX={{ base: 4, md: 8 }}>
      {/* Page Title */}
      <Text textStyle="6xl" marginBottom="30px" alignSelf="flex-start">
        Contact
      </Text>

      {/* Map + Info Section */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap={{ base: 6, md: 12 }}
        alignItems={{ base: "flex-start", md: "stretch" }}
      >
        {/* Google Map */}
        <Box flexShrink={0} width={{ base: "100%", md: "600px" }}>
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=750+Republican+St,+Seattle,+WA+98109/@47.6234465,-122.3407912`}
          />
        </Box>

        {/* Contact Info */}
        <Flex flexDirection="column" flex="1" gap={6}>
          {/* Available Positions */}
          <Box>
            <Text textStyle="4xl" marginBottom={2}>
              Available Positions
            </Text>
            <Text>
              Undergraduates, please contact the lab for current openings.
            </Text>
          </Box>

          {/* Office */}
          <Box>
            <Text textStyle="4xl" marginBottom={2}>
              Office
            </Text>
            <Text>
              F753 Building, 750 Republican Street <br />
              Seattle, WA <br />
              T: 206-897-6160 <br />
              E:{" "}
              <Link href="mailto:txjordan@uw.edu" color="blue.400">
                txjordan@uw.edu
              </Link>
            </Text>
          </Box>

          {/* Mailing Address */}
          <Box>
            <Text textStyle="4xl" marginBottom={2}>
              Lab Mailing Address
            </Text>
            <Text>Mailbox: 3508070</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
