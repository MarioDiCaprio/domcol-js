import {NextPage} from "next";
import Base from "../components/Base/Base";
import MathJax from "../components/MathJax/MathJax";
import {Container, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DocTable, Headline, IllustrationWrapper, Link, Paragraph, Section, SubHeadline} from "../styles/Learn.styles";
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
                        More specifically, it utilizes the visualization algorithms stated below. This was achieved
                        with <Link href="https://www.opengl.org/">OpenGL</Link>, which allows to use vertex- and
                        fragment shaders to achieve our goals.
                    </Paragraph>
                </Section>

                <Section>
                    <Headline>
                        Domain Coloring
                    </Headline>
                    <Paragraph>
                        <i>Domain Coloring</i> is a method for plotting complex-valued functions. Consider this:
                        Let <MathJax raw math="f: \mathbb{C} \to \mathbb{C}" /> be a complex-valued function, with <MathJax raw math="z \mapsto f(z)" />.
                        Since <MathJax raw math="\mathbb{C}" /> has two dimensions, we know
                        that both the <Link href="https://en.wikipedia.org/wiki/Domain_of_a_function">domain</Link> (the <i>"input"</i>)
                        and <Link href="https://en.wikipedia.org/wiki/Codomain">codomain</Link> (the <i>"output"</i>) of <MathJax math="f" /> are two-dimensional.
                        So now we have a total of four dimensions to visualize!
                    </Paragraph>

                    <SubHeadline>
                        The Idea
                    </SubHeadline>
                    <Paragraph>
                        Let's visualize the function's domain first. Since there exists a one-to-one correspondence
                        between sets <MathJax raw math="\mathbb{C}" /> and <MathJax raw math="\mathbb{R}^2" />
                        (<MathJax raw math="a + bi \leftrightarrow (a, b)" />) we can visualize it on the
                        <i>"classic"</i> two-dimensional coordinate system, here referred to as the {' '}
                        <Link href="https://en.wikipedia.org/wiki/Complex_plane">complex plane</Link>.
                        Here, the <MathJax math="x" />-axis will represent all real numbers and the <MathJax math="y" />-axis
                        will represent all imaginary numbers.
                    </Paragraph>
                    <IllustrationWrapper>
                        <img alt="complex plane" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Argandgaussplane.png" />
                        <div>(source: wikimedia.org)</div>
                    </IllustrationWrapper>
                    <Paragraph>
                        Visualizing the domain was pretty easy. But now comes the tricky part: Visualizing the codomain.
                        Recall that every complex number can be represented in polar form too: As we see in the illustration
                        the number <MathJax math="a + bi" /> has an angle <MathJax raw math="\theta" /> (in radians) to the <MathJax math="x" />-axis
                        and a distance to the origin, which we will call <MathJax math="r" />:
                        <MathJax raw display math="a + bi = r \cdot e^{i \theta}" />
                        We also have a quick look at color theory and recall
                        the <Link href="https://en.wikipedia.org/wiki/HSL_and_HSV">HSV color model</Link>:
                    </Paragraph>
                    <IllustrationWrapper>
                        <img alt="complex plane" src="https://www.dynamicmath.xyz/images/domain-coloring/wheel.svg" style={{ width: 300 }} />
                        <div>(source: dynamicmath.xyz)</div>
                    </IllustrationWrapper>
                    <Paragraph>
                        As we can see in the chart above, the color's hue will correspond to the angle <MathJax raw math="\theta" />.
                        Its brightness will be given by the number <MathJax math="r" />: We need some arbitrary bijective mapping from all
                        possible values of <MathJax math="r" /> (i.e. <MathJax raw math="\mathbb{R}^+" />) to the semi-open
                        interval <MathJax math="[0; 1)" /> (which will be the brightness). Such a mapping can be {' '}
                        <MathJax raw math="r \mapsto \frac{\tanh(r)+1}{2}" />, for example. The color's saturation will
                        be <MathJax math="1" />
                    </Paragraph>
                    <Paragraph>
                        And that's it! To summarize, every number on the complex plane is colored as follows:
                        <MathJax raw display math="a + bi \mapsto \text{hsv}(h(\theta), 1, b(r))" />
                        With the following specifications:
                        <ul>
                            <li>
                                <MathJax raw math="h:[0; 2\pi) \to [0; 360)" /> is continuous and bijective
                                (ideally, simply convert radians to degrees).
                            </li>
                            <li>
                                <MathJax raw math="b:\mathbb{R}^+ \to [0; 1)" /> is continuous and bijective.
                            </li>
                        </ul>
                    </Paragraph>
                    <SubHeadline>
                        Grid Decorations
                    </SubHeadline>
                    <Paragraph>
                        Additionally, we can add decorative grids in order to better visualize certain properties
                        of the function. Currently, there are two types of grids:
                        <ul>
                            <li>
                                dark grid lines are colored whenever the real or imaginary part of the function
                                are integers
                            </li>
                            <li>
                                light grid lines are colored whenever the function doubles in magnitude
                            </li>
                        </ul>
                    </Paragraph>
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
