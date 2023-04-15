import {NextPage} from "next";
import Base from "../components/Base/Base";
import MathJax from "../components/MathJax/MathJax";
import {Container, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DocTable, Headline, Link, Paragraph, Section, SubHeadline} from "../styles/Learn.styles";
import Credentials from "../components/Credentials/Credentials";


const Learn: NextPage = () => {
    return (
        <Base title="Complexify | Learn">

            <Container maxWidth="md" sx={{ padding: '100px 10px 50px 10px' }}>

                <Section>
                    <Headline>
                        What is this website?
                    </Headline>
                    <Paragraph>
                        This website was created with the intention of easily plotting complex-valued functions.
                        More specifically, it utilizes a method called <i>Domain Coloring</i>. This was achieved
                        with <Link href="src/pages/learn">OpenGL</Link>, implementing the below-described
                        algorithm using vertex- and fragment shaders.
                    </Paragraph>
                </Section>

                <Section>
                    <Headline>
                        What is Domain Coloring?
                    </Headline>
                    <Paragraph>
                        Domain coloring is a method for plotting complex-valued functions. Consider this:
                        Let <MathJax raw math="f: \mathbb{C} \to \mathbb{C}" /> be a complex-valued function.
                        Since <MathJax raw math="\mathbb{C}" /> has two dimensions, we know
                        that <MathJax math="f" /> accepts two dimensions and outputs two more dimensions.
                        So now we have a total of four dimensions to visualize!
                    </Paragraph>

                    <SubHeadline>
                        The Idea
                    </SubHeadline>
                    <Paragraph>
                        Let's start with the first two dimensions, namely those given by the function's argument.
                        The argument can easily be visualized on the complex plane by mapping its real part
                        to the <MathJax math="x"/>-axis and its imaginary part to the <MathJax math="y"/>-axis.
                        For the function's output, things become a little bit tricky. Note that a complex number
                        of the form <MathJax math="a + bi"/> for some <MathJax raw math="a, b \in \mathbb{R}"/> can
                        be rewritten in its polar form: <MathJax raw math="a + bi = r(\cos \theta + \sin \theta)"/>,
                        where <MathJax raw math="\theta = \text{atan2}(\frac{b}{a})"/>. If we visualize this number
                        on the complex plane, as stated before, we will find the following: <MathJax math="r"/> is
                        the distance from the number to the origin and <MathJax raw math="\theta"/> is the angle from
                        the number to the <MathJax math="x"/>-axis. This output will not be mapped to a spacial
                        dimension, but to a color: Let <MathJax raw math="\text{hsv}"/> be some arbitrary function
                        that accepts hue, saturation and brightness as inputs and outputs a corresponding color.
                        Then our domain coloring is given by the following:
                        <MathJax display raw math="\text{Domcol}_f = (a, b, \text{hsv}(\theta, 1, r))"/>
                        Where each coordinate <MathJax math="(a, b)" /> is colored with its corresponding
                        color <MathJax raw math="\text{hsv}(\theta, 1, r)"/>.
                    </Paragraph>

                    <SubHeadline>
                        Grid Decorations
                    </SubHeadline>
                    <Paragraph>
                        Additionally, we can add decorative grids in order to better visualize certain properties
                        of the function. Currently, there are two types of grids:
                    </Paragraph>

                    <ul>
                        <li>
                            dark grid lines are colored whenever the real or imaginary part of the function
                            are integers
                        </li>
                        <li>
                            light grid lines are colored whenever the function doubles in magnitude
                        </li>
                    </ul>
                </Section>

                <Section>
                    <Headline>
                        How do I plot functions?
                    </Headline>
                    <Paragraph>
                        Plotting a function is very easy: Simply open up the editor and define
                        your functions! Note that functions and variables consist of only one
                        letter. Also, the function that you want to plot should be prefixed with "@".
                    </Paragraph>

                    <SubHeadline>
                        Built-In functions
                    </SubHeadline>

                    <TableContainer component={Paper}>
                        <DocTable>
                            <TableHead>

                                <TableRow>
                                    <TableCell>Function</TableCell>
                                    <TableCell>Syntax</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>

                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\sin" />
                                    </TableCell>
                                    <TableCell>
                                        <code>sin</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the sine of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\cos" />
                                    </TableCell>
                                    <TableCell>
                                        <code>cos</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the cosine of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\tan" />
                                    </TableCell>
                                    <TableCell>
                                        <code>tan</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the tangent of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\sinh" />
                                    </TableCell>
                                    <TableCell>
                                        <code>sinh</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the hyperbolic sine of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\cos" />
                                    </TableCell>
                                    <TableCell>
                                        <code>cos</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the hyperbolic cosine of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\tanh" />
                                    </TableCell>
                                    <TableCell>
                                        <code>tanh</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the hyperbolic tangent of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\sec" />
                                    </TableCell>
                                    <TableCell>
                                        <code>sec</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the secant of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\csc" />
                                    </TableCell>
                                    <TableCell>
                                        <code>csc</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the cosecant of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\cot" />
                                    </TableCell>
                                    <TableCell>
                                        <code>cot</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the cotangent of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\text{cis}" />
                                    </TableCell>
                                    <TableCell>
                                        <code>cis</code>
                                    </TableCell>
                                    <TableCell>
                                        Defined as: <br />
                                        <MathJax raw math="\text{cis}(x) = \cos(x) + i \sin(x)" />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\log" />
                                    </TableCell>
                                    <TableCell>
                                        <code>log</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the logarithm (base <MathJax math="10" />) of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\ln" />
                                    </TableCell>
                                    <TableCell>
                                        <code>ln</code>
                                    </TableCell>
                                    <TableCell>
                                        Calculates the natural logarithm of the given number.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\Re" />
                                    </TableCell>
                                    <TableCell>
                                        <code>Re</code>
                                    </TableCell>
                                    <TableCell>
                                        Extracts the given number's real part.
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell sx={{ border: 'none' }}>
                                        <MathJax raw math="\Im" />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <code>Im</code>
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        Extracts the given number's imaginary part.
                                        Note that the returned number is real.
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </DocTable>
                    </TableContainer>

                    <SubHeadline>
                        Built-In constants
                    </SubHeadline>

                    <TableContainer component={Paper}>
                        <DocTable>
                            <TableHead>

                                <TableRow>
                                    <TableCell>Constant</TableCell>
                                    <TableCell>Syntax</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>

                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell>
                                        <MathJax raw math="\pi" />
                                    </TableCell>
                                    <TableCell>
                                        <code>pi</code>
                                    </TableCell>
                                    <TableCell>
                                        The number <MathJax raw math="e \approx 2.718281"/>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell sx={{ border: 'none' }}>
                                        <MathJax raw math="e" />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        <code>e</code>
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }}>
                                        The number <MathJax raw math="e \approx 2.718281"/>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </DocTable>
                    </TableContainer>

                    <SubHeadline>
                        Fractals
                    </SubHeadline>
                    <Paragraph>
                        Currently, there is only one fractal available, namely the famous <i>Mandelbrot Set</i>.
                        To plot it, simply type <code>Mandelbrot</code> in the editor (Note: No prefix "@" and no
                        function definition, just the word!). It is colored using a technique called <i>orbit trap</i>.
                    </Paragraph>

                </Section>

            </Container>
            <Credentials />
        </Base>
    );
}


// noinspection JSUnusedGlobalSymbols
export default Learn;
